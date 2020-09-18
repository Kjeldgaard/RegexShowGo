// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vsc-hyperlink" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vsc-hyperlink.helloWorld', () => 
	{
		vscode.window.showInformationMessage("Hyperlink activated");	
	});

	context.subscriptions.push(disposable);

	vscode.languages.registerHoverProvider('*', {
		provideHover(document, position, token) {
			const line = document.lineAt(position);
			const config = vscode.workspace.getConfiguration().get("config.array");
			let pattern;
			let text: string = "";
			for (let i = 0; i < config.length; i++){
				pattern = new RegExp(config[i].match_pattern, 'g');
				let match = pattern.exec(line.text);
				while (match) {
					text += config[i].prefix+match[0];
					
					match = pattern.exec(line.text);
					if (match){
						text += " \|\| ";
					}
				}
			}

            if (text.length > 0) {	
                return new vscode.Hover(
					text
				);
            }
        }
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
