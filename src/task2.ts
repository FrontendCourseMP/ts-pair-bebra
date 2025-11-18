class BracketValidator {

    bracketDict: { [key: string] : string} = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    flag(bracketStr: string) : boolean {
        const stack: string[] = [];
        for (let symb of bracketStr) {
            if (Object.keys(this.bracketDict).includes(symb)) {
               stack.push(symb);
            }
            else if (Object.values(this.bracketDict).includes(symb)) {
                if (stack.length === 0)
                    return false;
                const lastOpening = stack.pop();
                if (lastOpening && this.bracketDict[lastOpening] !== symb) {
                    return false;
                }
            }
        }
        return stack.length === 0;  
    }
}
const bracketsInput: HTMLInputElement | null = document.querySelector('.brackets__input')
const bracketsOutput: HTMLInputElement | null = document.querySelector('.brackets__output')

const brckVldtr = new BracketValidator();

function updateValidationResult(): void {
    if (bracketsOutput && bracketsInput) {
        const bracketsRes = brckVldtr.flag(bracketsInput.value);
        bracketsOutput.textContent = bracketsRes ? 'да' : 'нет';
    }
}

bracketsInput?.addEventListener('input', updateValidationResult)