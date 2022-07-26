// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Regex Show Go" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('RegexShowGo', () => {});

	context.subscriptions.push(disposable);

	// Execute when hovering over line
	vscode.languages.registerHoverProvider('*', {
		provideHover(document, position, token)
		{
			// Get line text
			const line = document.lineAt(position);
			const config: {[index: string]:any} = vscode.workspace.getConfiguration().get("regex_show_go.config.match") || {};
			let text: string = "";

			// Search for regex match pattern in line text
			for (let i = 0; i < Object.keys(config).length; i++)
			{
				let pattern;
				let match;
				let search_at = !(typeof config[i].search_at === "undefined") && config[i].search_at === true;

				if (search_at)
				{
					// If match found, store match prefix and match
					pattern = new RegExp(config[i].match_pattern + "#?([^#]+)#", 'g');
					match = pattern.exec(line.text);
				}
				else
				{
					// If match found, store match prefix and match
					pattern = new RegExp(config[i].match_pattern, 'g');
					match = pattern.exec(line.text);
				}

				while (match)
				{
					// Store match, add separator if not the first match
					if (text.length > 0)
					{
						text += " \|\| ";
					}
					if (search_at)
					{
						text += config[i].prefix + match[1] + config[i].postfix;
					}
					else
					{
						text += config[i].prefix + match[0] + config[i].postfix;
					}


					// Get next match
					match = pattern.exec(line.text);
				}
			}

			// Display match text in hover
			if (text.length > 0)
			{
                return new vscode.Hover(text);
            }
        }
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
