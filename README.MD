# EventHub

Ứng dụng React Native dùng Expo SDK 57, chạy trên Expo Go (không cần build native).

## Yêu cầu

- [Node.js](https://nodejs.org/) 20.19 trở lên (kèm npm)
- Điện thoại iOS hoặc Android, cùng mạng Wi-Fi với máy tính
- App **Expo Go**
  - [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)

Tùy chọn, nếu muốn chạy trên máy ảo:

- iOS Simulator: [Xcode](https://developer.apple.com/xcode/) (chỉ trên macOS)
- Android Emulator: [Android Studio](https://developer.android.com/studio)

Kiểm tra Node:

```bash
node -v
npm -v
```

## Cài đặt

1. Mở terminal tại thư mục dự án.

2. Cài dependency:

```bash
npm install
```

3. Khởi động dev server:

```bash
npx expo start
```

Terminal hiện mã QR và menu lệnh. Giữ terminal này mở trong lúc phát triển.

## Chạy trên Expo Go

1. Cài Expo Go trên điện thoại.
2. Điện thoại và máy tính dùng cùng Wi-Fi.
3. Chạy `npx expo start`.
4. Mở Expo Go và quét mã QR:
   - **iOS:** mở app Camera, quét QR, chọn mở bằng Expo Go.
   - **Android:** mở Expo Go, chọn **Scan QR code**.

Lần đầu Expo Go tải bundle JavaScript. Sau đó app EventHub mở màn hình logo.

Nếu QR không kết nối được, trong terminal nhấn `s` để đổi sang tunnel (chậm hơn, nhưng không phụ thuộc Wi-Fi nội bộ):

```bash
npx expo start --tunnel
```

## Chạy trên máy ảo

Khi dev server đang chạy:

- Nhấn `i` để mở iOS Simulator (cần Xcode).
- Nhấn `a` để mở Android Emulator (cần Android Studio, emulator đã tạo và đang bật).

Hoặc chạy thẳng:

```bash
npm run ios
npm run android
npm run web
```

## Lệnh thường dùng

| Lệnh | Việc làm |
| --- | --- |
| `npx expo start` | Bật dev server |
| `npx expo start -c` | Bật lại và xóa cache Metro |
| `r` (trong terminal Expo) | Reload app |
| `npx tsc --noEmit` | Kiểm tra TypeScript |

Sửa file rồi lưu. Expo Go tự reload. Nếu màn hình không đổi, lắc điện thoại và chọn **Reload**, hoặc nhấn `r` trong terminal.

## Xử lý lỗi thường gặp

**`npm install` báo lỗi quyền hoặc cache**

```bash
npm cache clean --force
npm install
```

**Expo Go báo không tương thích SDK**

Cập nhật Expo Go lên bản mới nhất trên App Store hoặc Google Play. Dự án dùng Expo SDK 57.

**Điện thoại không thấy dev server**

- Tắt VPN trên cả hai máy.
- Kiểm tra tường lửa cho phép Node.
- Thử `npx expo start --tunnel`.

**Màn hình trắng hoặc bundle cũ**

```bash
npx expo start -c
```

**Port 8081 đang bị chiếm**

```bash
npx expo start --port 8082
```
# event-booking-app
