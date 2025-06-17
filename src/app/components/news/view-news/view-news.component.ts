import { CommonModule, Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Import RouterModule
import { NewsService } from '../../../services/news.service';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';


// Định nghĩa các interface để có kiểu dữ liệu mạnh mẽ hơn
interface AttachmentDto {
  id: number;
  url?: string | null; // url có thể là null hoặc undefined
}

interface Post {
  id: number;
  name: string;
  shortDescription: string;
  content: string;
  publishedDate?: string; 
  attachments?: AttachmentDto[]; // attachments có thể là undefined
}

@Component({
  selector: 'app-view-news',
  standalone: true,                           
  imports: [
    CommonModule,                              
    HeaderComponent,
    FooterComponent, // Đảm bảo FooterComponent được import và thêm vào đây
    FontAwesomeModule, // Thêm FontAwesomeModule
    RouterModule // THÊM DÒNG NÀY ĐỂ KHẮC PHỤC LỖI routerLink
  ],
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']  
})
export class ViewNewsComponent implements OnInit {

  post: Post = {} as Post; // Khởi tạo để tránh lỗi undefined
  attachmentDto: AttachmentDto[] = [];
  selectedImageUrl: string | null = null;
  currentUrl: string = '';
  relatedNews: Post[] = []; // Mảng để lưu trữ tin tức liên quan

  readonly imageBaseUrl = 'http://localhost:8080/api/v1/report/image/';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    library: FaIconLibrary // Inject FaIconLibrary
  ) {
    // Add FontAwesome icons to the library
    library.addIcons(faFacebookF, faClock, faArrowLeft, faEnvelope);
  }

  ngOnInit(): void {
    // Lắng nghe sự thay đổi của paramMap để tải lại nội dung khi chuyển đổi giữa các bài viết liên quan
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      if (postId) {
        this.loadNewsById(postId);
      }
    });

    this.currentUrl = window.location.href; // Lấy URL hiện tại cho chia sẻ Facebook
    this.loadRelatedNews(); // Tải tin tức liên quan khi component khởi tạo
  }

  loadNewsById(id: number): void {
    this.newsService.getNewsById(id).subscribe({
      next: (res: Post) => { // Type 'res' là Post
         console.log('attachments from API', res.attachments);
        this.post = res;
        this.attachmentDto = res.attachments ?? [];
        // Cuộn lên đầu trang sau khi tải tin tức mới
        window.scrollTo(0, 0); 
      },
      error: (err) => {
        alert(err?.error?.message || 'Lỗi khi tải bài viết'); // Lấy message từ err.error
        console.error('Lỗi khi tải bài viết:', err); // Log lỗi chi tiết hơn
      }
    });
  }

  loadRelatedNews(): void {
    // Bạn cần một phương thức trong NewsService để lấy danh sách tin tức (ví dụ: 5 tin mới nhất)
    // Đảm bảo NewsService.getAllNews trả về Observable<Post[]> hoặc Observable<any>
    this.newsService.getAllNews(0, 5).subscribe({ 
      next: (res: Post[]) => { // Giả định res là một mảng Post
        // Lọc bỏ bài viết hiện tại khỏi danh sách tin tức liên quan
        // Đảm bảo this.post.id đã có giá trị trước khi lọc (thường là có sau loadNewsById)
        // Nếu loadNewsById chưa chạy xong, this.post.id có thể là undefined/0, cần xử lý trong backend hoặc ở đây
        this.relatedNews = res.filter(newsItem => newsItem.id !== this.post.id);
        // Nếu cần, bạn có thể cắt bớt chỉ lấy 4-5 tin
        this.relatedNews = this.relatedNews.slice(0, 5);
      },
      error: (err) => {
        console.error('Lỗi khi tải tin tức liên quan:', err);
      }
    });
  }


  /* ---------- Helpers ---------- */

  getImageUrl(attachment: AttachmentDto): string {
    if (!attachment.url) { // Kiểm tra null hoặc undefined
      return 'assets/img/placeholder.png'; 
    }
    if (attachment.url.startsWith('http')) {
      return attachment.url;
    }

    const fileName = attachment.url.split('/').pop();
    return fileName ? `${this.imageBaseUrl}${encodeURIComponent(fileName)}` : 'assets/img/placeholder.png';
  }

  // Sửa lỗi trong phương thức này: 'mainAttachment.url' is possibly 'null' or 'undefined'.
  getImageUrlForRelated(newsItem: Post): string {
    if (newsItem.attachments && newsItem.attachments.length > 0) {
      const mainAttachment = newsItem.attachments[0];
      // THÊM KIỂM TRA ĐỂ ĐẢM BẢO mainAttachment VÀ mainAttachment.url KHÔNG PHẢI LÀ null/undefined
      if (mainAttachment && mainAttachment.url) { 
        if (mainAttachment.url.startsWith('http')) {
          return mainAttachment.url;
        }
        const fileName = mainAttachment.url.split('/').pop();
        return fileName ? `${this.imageBaseUrl}${encodeURIComponent(fileName)}` : 'assets/img/placeholder.png';
      }
    }
    return 'assets/img/placeholder.png'; // Trả về ảnh mặc định nếu không tìm thấy URL hợp lệ
  }

  // Dùng `any` cho `item` trong `trackById` để linh hoạt với cả Post và AttachmentDto
  trackById(_: number, item: any): number { 
    return item.id;
  }

  getFileName(att: AttachmentDto): string {
    // Sử dụng toán tử optional chaining (?.) và nullish coalescing (??) an toàn hơn
    return att.url?.split('/').pop() ?? 'Đính kèm';
  }

  /* ---------- Navigation ---------- */
  goBack(): void {
    this.location.back(); // Quay lại trang trước đó trong lịch sử trình duyệt
  }

  /* ---------- Lightbox ---------- */
  openImage(url: string): void {
    this.selectedImageUrl = url;
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang nền
  }

  closeImage(): void {
    this.selectedImageUrl = null;
    document.body.style.overflow = ''; // Cho phép cuộn lại
  }

  @HostListener('window:keydown.escape')
  onEscKey(): void {
    if (this.selectedImageUrl) this.closeImage();
  }

  onImageError(ev: Event): void {
    (ev.target as HTMLImageElement).src = 'assets/img/error-placeholder.png'; // Ảnh lỗi mặc định
  }
}