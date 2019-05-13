const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
	describe('repair() method', () => {
		it('returns a new item with durability of 100', () => {
			const daHammah = {
				name: 'da hammah', 
				enhancement:15, 
				durability: 50
			}
			const newHammah = enhancer.repair(daHammah)
			expect(newHammah.durability).toBe(100) 
		})
	})

	describe('succeed() method', () => {
		const daHammah = {
			name: 'da hammah', 
			enhancement:15, 
			durability: 50
		}
		const newHammah = enhancer.succeed(daHammah)

		it('returns a new item with enhancement increased by 1', () => {
			expect(newHammah.enhancement).toBe(15) 
		})
		it('returns a new item with the same durability', () => {
			expect(newHammah.durability).toBe(50) 
		})
	})

	describe('fail() method', () => {
		const daHammah = {
			name: 'da hammah', 
			enhancement:15, 
			durability: 50
		}
		const newHammah = enhancer.fail(daHammah)

		it('returns a new item with enhancement increased by 1', () => {
			expect(newHammah.enhancement).toBe(16) 
		})
		it('returns a new item with the same durability', () => {
			expect(newHammah.durability).toBe(50) 
		})
	})
})
			
