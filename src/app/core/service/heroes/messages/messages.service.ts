// Import thư viện
import { Injectable } from "@angular/core";

// MessageService: Ghi và xóa thông điệp lên hệ thống
@Injectable ({
    providedIn: 'root',
})
export class MessageService {
    // Biến lưu trữ danh sách thông điệp
    messages: string[] = [];

    // Ghi thêm một thông điệp mới
    add(messages: string){
        this.messages.push(messages);
    }

    //Xóa toàn bộ thông điệp
    clear(){
        this.messages = [];
    }
}