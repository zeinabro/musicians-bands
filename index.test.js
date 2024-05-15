const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        await Band.create({name:"test band",genre:"test genre"})
        const bands = await Band.findAll()
        expect(bands[0]).toEqual(expect.objectContaining({name:"test band",genre:"test genre"}));
    })

    test('can create a Musician', async () => {
        await Musician.create({name:"test musician",instrument:"test instrument"})
        const musicians = await Musician.findAll()
        expect(musicians[0]).toEqual(expect.objectContaining({name:"test musician",instrument:"test instrument"}));
    })

    test('can update a Band', async () => {
        const band = await Band.create({name:"test band 2",genre:"test genre"})
        await band.update({
            name: "test 2"
        })
        expect(band.name).toBe("test 2")
    })

    test('can update a Musician', async () => {
        const musician = await Band.create({name:"test musician 2",instrument:"test instrument"})
        await musician.update({
            name: "test 2"
        })
        expect(musician.name).toBe("test 2")
    })

    test('can delete a Band', async () => {
        const band = await Band.create({name:"test band 3",genre:"test genre"})
        await band.destroy()
        const findBand = await Band.findAll({
            where: {
                name: "test band 3"
            }
        })
        expect(findBand[0]).toBe(undefined);
    })

    test('can delete a Musician', async () => {
        const musician = await Musician.create({name:"test musician 3",instrument:"test instrument"})
        await musician.destroy()
        const findMusician = await Musician.findAll({
            where: {
                name: "test musician 3"
            }
        })
        expect(findMusician[0]).toBe(undefined);
    })
})