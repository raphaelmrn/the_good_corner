type Message = {
	from: string;
	message: string;
	isRead?: boolean;
};
type Thread = Message[];
// type Thread = Array<Message>
type Notif = {
	at: number;
	state: "read" | "unread";
};

const messsageText = "Hello Bob!";
const messageCreatedAt = new Date();

function stringifyMessage(text: string, createdAt: Date) {
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

const message1: Message = {
	from: "Bob",
	message: "Hello Alice!",
	isRead: true,
};
const message2: Message = { from: "Alice", message: "Hi Bob!" };

const messages: Thread = [message1, message2];
function readMessages(messages: Thread): number {
	// for (let i = 0; i < messages.length; i++) {
	// 	messages[i].isRead = true;
	// }
	messages = messages.map((msg) => ({ ...msg, isRead: true }));
	return messages.length;
}
readMessages(messages);

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };

function readNotificationOrMessage(
	notificationOrMessage: Notif | Message,
): void {
	if ("state" in notificationOrMessage) {
		notificationOrMessage.state = "read";
	} else {
		notificationOrMessage.isRead = true;
	}
}
