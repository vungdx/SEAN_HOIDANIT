#23 Tạo Tất Cả Models, Migrations và Seeders Cho Dự Án Đặt Lịch Khám Bệnh - Phần 1



200: Máy chủ trả về thành công dữ liệu do người dùng yêu cầu
201: CREATED- [POST/PUT/PATCH]: Người dùng đã tạo hoặc sửa đổi dữ liệu thành công
202: Được chấp nhận. Cho biết một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ)
204: Không có nội dung [XÓA] Người dùng đã xóa dữ liệu thành công


400: Yêu cầu không hợp lệ [POST-PUT-PATCH] Có lỗi trong yêu cầu do người dùng gửi lên và máy chủ chưa thực hiện thao tác tạo hoặc sửa đổi dữ liệu. Thao tác này là vô ích
401: Unauthorized - [*] Cho biết rằng người dùng không có quyền (mã thông báo, tên người dùng và mật khẩu bị sai)
403: Forbidden - [*] có nghĩa là người dùng được ủy quyền (trái ngược với lỗi 401) nhưng quyền truy cập bị cấm
404 NOT FOUND - [*] Yêu cầu do người dùng gửi là 1 bản ghi không tồn tại và máy chủ chưa thực hiện một thao tác. Thao tác này là không quan trọng
406: Không thể chấp nhận - [*GET] không có định dạng do người dùng yêu cầu (ví dụ người dùng yêu cầu định dạng JSON, nhưng chỉ có định dạng XML)'
410 [GET] Tài nguyên do người dùng yêu cầu sẽ bị xóa vĩnh viễn và sẽ không còn nữa
422 Thực thể không thể xử lý  -[POST/PUT/PATCH] Khi tạo 1 đối tượng, đã xảy ra lỗi xác thực


500: LỖI MÁY CHỦ NỘI BỘ- [*] Máy chủ bị lỗi và người dùng sẽ không thể xác định yêu cầu có thành công hay không

