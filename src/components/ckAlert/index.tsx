import Message from './Message';
import { createRoot } from 'react-dom/client';

interface data {
	content: string;
	duration: number;
}
const message: any = {
	dom: null,
	success({ content, duration = 2000 }: data) {
		this.dom = document.createElement('div');
		createRoot(this.dom).render(
			<Message content={content} duration={duration} type='success'></Message>
		);
		document.body.appendChild(this.dom);
	},
	error({ content, duration = 2000 }: data) {
		this.dom = document.createElement('div');
		createRoot(this.dom).render(
			<Message content={content} duration={duration} type='error'></Message>
		);
		document.body.appendChild(this.dom);
	},
	warning({ content, duration = 2000 }: data) {
		this.dom = document.createElement('div');
		createRoot(this.dom).render(
			<Message content={content} duration={duration} type='warning'></Message>
		);
		document.body.appendChild(this.dom);
	},
	info({ content, duration = 2000 }: data) {
		this.dom = document.createElement('div');
		createRoot(this.dom).render(
			<Message content={content} duration={duration} type='info'></Message>
		);
		document.body.appendChild(this.dom);
	}
};

export default message;
