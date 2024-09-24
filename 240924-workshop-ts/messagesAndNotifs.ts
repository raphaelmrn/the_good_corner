const messsageText = "Hello Bob!";
const messageCreatedAt = new Date();

function stringifyMessage(text: string, createdAt: Date) {
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}
