# Pattern Index

Danh mục 23 Gang of Four design patterns theo nhóm chính thức.

## Creational

| Pattern | Mục đích chính |
|---|---|
| Abstract Factory | Tạo họ object liên quan mà không phụ thuộc concrete class. |
| Builder | Tạo object phức tạp theo từng bước, dễ đọc và dễ kiểm soát. |
| Factory Method | Để subclass hoặc concrete factory quyết định object cần tạo. |
| Prototype | Tạo object mới bằng cách clone object mẫu. |
| Singleton | Đảm bảo một class chỉ có một instance có thể truy cập toàn cục. |

## Structural

| Pattern | Mục đích chính |
|---|---|
| Adapter | Chuyển interface hiện có thành interface client mong muốn. |
| Bridge | Tách abstraction khỏi implementation để cả hai thay đổi độc lập. |
| Composite | Gom object đơn và object nhóm thành cùng một interface dạng cây. |
| Decorator | Bọc object để thêm hành vi mà không sửa class gốc. |
| Facade | Cung cấp API đơn giản cho subsystem phức tạp. |
| Flyweight | Chia sẻ dữ liệu dùng chung để giảm chi phí bộ nhớ. |
| Proxy | Đại diện cho object khác để kiểm soát truy cập hoặc thêm hành vi phụ. |

## Behavioral

| Pattern | Mục đích chính |
|---|---|
| Chain of Responsibility | Truyền request qua chuỗi handler cho đến khi có handler xử lý. |
| Command | Đóng gói request/action thành object. |
| Interpreter | Diễn giải grammar/DSL đơn giản. |
| Iterator | Duyệt collection mà không lộ cấu trúc bên trong. |
| Mediator | Điều phối giao tiếp giữa nhiều object để giảm phụ thuộc chéo. |
| Memento | Lưu và khôi phục trạng thái object mà không phá encapsulation. |
| Observer | Thông báo thay đổi từ subject đến nhiều subscriber. |
| State | Cho object đổi hành vi khi trạng thái nội bộ thay đổi. |
| Strategy | Hoán đổi thuật toán/hành vi qua interface chung. |
| Template Method | Định nghĩa skeleton workflow và cho subclass tùy biến một số bước. |
| Visitor | Thêm operation mới cho cấu trúc object ổn định. |
