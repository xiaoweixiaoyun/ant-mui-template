export function downFile(blob: any, fileName: string) {
	// Downloads other than IE
	if ('download' in document.createElement('a')) {
		let link = document.createElement('a');
		link.href = window.URL.createObjectURL(blob); // Creating a downloaded link
		link.download = fileName; // File name after download
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click(); // Download
		window.URL.revokeObjectURL(link.href); // Freeing blob objects
		document.body.removeChild(link); // Deleting download completed elements
	} else {
		// IE10 + download
		(window.navigator as any).msSaveBlob(blob, fileName);
	}
}
