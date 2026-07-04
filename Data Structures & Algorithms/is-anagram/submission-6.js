class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const numberMap = new Map()

        for (let letter of s) {
            if (numberMap.has(letter)) {
                numberMap.set(letter, numberMap.get(letter) + 1)
            } else {
                numberMap.set(letter, 1)
            }
        }
        for (let letter of t) {

            if (numberMap.has(letter) && numberMap.get(letter) > 0) {
                numberMap.set(letter, numberMap.get(letter) - 1)
            } else {
                return false
            }
        }
        return true
    }
}
