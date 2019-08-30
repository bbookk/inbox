export class InboxModel {
    from: object = {
        name: String,
        email: String
    }
    subject: string;
    body: string;


    clear() {
        this.from = {
            name: '',
            email: ''
        }
        this.subject = '';
        this.body = ''
    }
}
