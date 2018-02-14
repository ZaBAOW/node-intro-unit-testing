const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function(){
	it('should return fizz for multiples of 3', function(){
		const fizzInputs = [
			[3],
			[6],
			[9]
		];
		fizzInputs.forEach(function(input){
			const answer = fizzBuzzer(input[0]);
			expect(answer).to.equal('fizz');
		});
		
	});

	it('should return buzz for multiples of 5', function(){
		const buzzInputs = [
			[5],
			[10],
			[20]
		];
		buzzInputs.forEach(function(input){
			const answer = fizzBuzzer(input[0]);
			expect(answer).to.equal('buzz');
		});
	});

	it('should return fizzbuzz for multiples of 15', function(){
		const fizzBuzzInputs = [
			[15],
			[30],
			[45]
		];
		fizzBuzzInputs.forEach(function(input){
			const answer = fizzBuzzer(input[0]);
			expect(answer).to.equal('fizz-buzz');
		});
	});

	it('should return input if not multiple of 3 or 5', function(){
		const returnInput = [
			[1],
			[2],
			[4]
		];
		returnInput.forEach(function(input){
			const answer = fizzBuzzer(input[0]);
			expect(answer).to.equal(input[0]);
		});
	});

	it('should return error if input is not a number', function(){
		const errorInput = [
			[true],
			[false],
			['number']
		];
		errorInput.forEach(function(input){
			const answer = function(){fizzBuzzer(input)};
			expect(answer).to.throw(Error);
		});
	});
});