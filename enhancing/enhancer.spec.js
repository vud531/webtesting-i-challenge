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
			expect(newHammah.enhancement).toBe(16) 
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
		const stormBreaker = {
			name: 'storm breaker', 
			enhancement:13, 
			durability: 50
		}
		const pocketKnife = {
			name: 'pocket knife', 
			enhancement:18, 
			durability: 50
		}
		const newStormBreaker = enhancer.fail(stormBreaker)
		const newPocketKnife = enhancer.fail(pocketKnife)
		const newHammah = enhancer.fail(daHammah)

		it('returns a new item with the same enhancement', () => {
			expect(newHammah.enhancement).toBe(15) 
		})
		it('returns a new item with the same durability', () => {
			expect(newHammah.durability).toBe(40) 
		})
		it('returns a new item with the durability decreased by 5', () => {
			expect(newStormBreaker.durability).toBe(45) 
		})
		it('returns a new item with the enhancement decreased by 1', () => {
			expect(newPocketKnife.enhancement).toBe(17) 
		})
		it('returns a new item with the same durability', () => {
			expect(newPocketKnife.durability).toBe(50) 
		})
	})
})
			
