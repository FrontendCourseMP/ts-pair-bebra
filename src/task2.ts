class BracketValidator {

    bracketDict: { [key: string] : string} = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    flag(bracketStr: string) : boolean {
        const stack: string[] = [];
        for (let symb of bracketStr) {
            if (this.bracketDict.keys.includes(symb)) {
               stack.push(symb);
            }
            else if (this.bracketDict.values.includes(symb)) {
                if (stack.length === 0)
                    return false;
                else {
                    const last = stack.pop();
                    if (!last) {
                        return false;
                    } else if (this.bracketDict[last] === symb){
                        return false;
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