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
                else {
                    const last = stack.pop();
                    if (last !== undefined) {
                        return false;
                    } else if (last !== undefined && this.bracketDict[last] === symb){
                        continue;
                    } else {
                        continue;
                    }
                } 
            }
        }
        if (stack.length === 0)
            return true
        else
            return false
    }
}

const brck1 = new BracketValidator

console.log(brck1.flag('([]}{{]])'))