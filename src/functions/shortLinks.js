function allPossibleCombinations(inputs, length, curstr) {
	if (curstr.length === length) return [curstr]; // проверка на ноль если ноль то вернет и нулевку
	var ret = [];
	for (var i = 0; i < inputs.length; i++) {
		ret.push.apply(
			ret,
			allPossibleCombinations(inputs, length, curstr + inputs[i])
		);
	}
	return ret;
}
var inputs = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'i',
	'j',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const combinations = () => {
	return allPossibleCombinations(inputs, 1, '').concat(
		allPossibleCombinations(inputs, 2, '').concat(
			allPossibleCombinations(inputs, 3, '')
		)
	);
};
export default combinations;
