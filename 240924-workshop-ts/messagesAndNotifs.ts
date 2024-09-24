type Message = {
	from: string;
	message: string;
	isRead?: boolean;
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
