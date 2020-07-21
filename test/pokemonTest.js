// IMPORT MODULES under test here:
import { chooseRandomItemFromArray, getArrayWithoutObjWithIdFromArray, isItemInArray, removeItemFromArray } from '../pokemonUtils.js';
import { pokemonData } from '../pokemonData.js';

const test = QUnit.test;

test('chooseRandomItemFromArray should return an object from the pokemonData array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'object';

    //Act 
    // Call the function you're testing and set the result to a const
    const actualArrayItem = chooseRandomItemFromArray(pokemonData),
        arrayTypeOf = typeof actualArrayItem;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(arrayTypeOf, expected);
});

test('getArrayWithoutObjWithIdFromArray should return an array without the object with the id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [
        { '_id': '5cef3501ef6005a77cd4fd17', 'pokemon': 'bulbasaur', 'id': 1, 'species_id': 1, 'height': 7, 'weight': 69, 'base_experience': 64, 'type_1': 'grass', 'type_2': 'poison', 'attack': 49, 'defense': 49, 'hp': 45, 'special_attack': 65, 'special_defense': 65, 'speed': 45, 'ability_1': 'overgrow', 'ability_2': 'NA', 'ability_hidden': 'chlorophyll', 'color_1': '#78C850', 'color_2': '#A040A0', 'color_f': '#81A763', 'egg_group_1': 'monster', 'egg_group_2': 'plant', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 1, 'shape_id': 8, 'shape': 'quadruped', 'pokebase': 'bulbasaur', 'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur' },
        { '_id': '5cef3501ef6005a77cd4fd18', 'pokemon': 'venusaur-mega', 'id': 4, 'species_id': 3, 'height': 24, 'weight': 1555, 'base_experience': 281, 'type_1': 'grass', 'type_2': 'poison', 'attack': 100, 'defense': 123, 'hp': 80, 'special_attack': 122, 'special_defense': 120, 'speed': 80, 'ability_1': 'thick-fat', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#78C850', 'color_2': '#A040A0', 'color_f': '#81A763', 'egg_group_1': 'monster', 'egg_group_2': 'plant', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png', 'generation_id': 'NA', 'evolves_from_species_id': 'NA', 'evolution_chain_id': 'NA', 'shape_id': 'NA', 'shape': 'NA', 'pokebase': 'venusaur', 'pokedex': 'http://www.pokemon.com/us/pokedex/venusaur' },
        { '_id': '5cef3501ef6005a77cd4fd19', 'pokemon': 'ivysaur', 'id': 2, 'species_id': 2, 'height': 10, 'weight': 130, 'base_experience': 142, 'type_1': 'grass', 'type_2': 'poison', 'attack': 62, 'defense': 63, 'hp': 60, 'special_attack': 80, 'special_defense': 80, 'speed': 60, 'ability_1': 'overgrow', 'ability_2': 'NA', 'ability_hidden': 'chlorophyll', 'color_1': '#78C850', 'color_2': '#A040A0', 'color_f': '#81A763', 'egg_group_1': 'monster', 'egg_group_2': 'plant', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png', 'generation_id': 1, 'evolves_from_species_id': '1', 'evolution_chain_id': 1, 'shape_id': 8, 'shape': 'quadruped', 'pokebase': 'ivysaur', 'pokedex': 'http://www.pokemon.com/us/pokedex/ivysaur' },
        { '_id': '5cef3501ef6005a77cd4fd1a', 'pokemon': 'charmander', 'id': 5, 'species_id': 4, 'height': 6, 'weight': 85, 'base_experience': 62, 'type_1': 'fire', 'type_2': 'NA', 'attack': 52, 'defense': 43, 'hp': 39, 'special_attack': 60, 'special_defense': 50, 'speed': 65, 'ability_1': 'blaze', 'ability_2': 'NA', 'ability_hidden': 'solar-power', 'color_1': '#F08030', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'dragon', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 2, 'shape_id': 6, 'shape': 'upright', 'pokebase': 'charmander', 'pokedex': 'http://www.pokemon.com/us/pokedex/charmander' },
        { '_id': '5cef3501ef6005a77cd4fd1b', 'pokemon': 'charmeleon', 'id': 6, 'species_id': 5, 'height': 11, 'weight': 190, 'base_experience': 142, 'type_1': 'fire', 'type_2': 'NA', 'attack': 64, 'defense': 58, 'hp': 58, 'special_attack': 80, 'special_defense': 65, 'speed': 80, 'ability_1': 'blaze', 'ability_2': 'NA', 'ability_hidden': 'solar-power', 'color_1': '#F08030', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'dragon', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png', 'generation_id': 1, 'evolves_from_species_id': '4', 'evolution_chain_id': 2, 'shape_id': 6, 'shape': 'upright', 'pokebase': 'charmeleon', 'pokedex': 'http://www.pokemon.com/us/pokedex/charmeleon' },
        { '_id': '5cef3501ef6005a77cd4fd1d', 'pokemon': 'charizard-mega-x', 'id': 8, 'species_id': 6, 'height': 17, 'weight': 1105, 'base_experience': 285, 'type_1': 'fire', 'type_2': 'dragon', 'attack': 130, 'defense': 111, 'hp': 78, 'special_attack': 130, 'special_defense': 85, 'speed': 100, 'ability_1': 'tough-claws', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#F08030', 'color_2': '#7038F8', 'color_f': '#D06E60', 'egg_group_1': 'monster', 'egg_group_2': 'dragon', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png', 'generation_id': 'NA', 'evolves_from_species_id': 'NA', 'evolution_chain_id': 'NA', 'shape_id': 'NA', 'shape': 'NA', 'pokebase': 'charizard', 'pokedex': 'http://www.pokemon.com/us/pokedex/charizard' },
        { '_id': '5cef3501ef6005a77cd4fd1e', 'pokemon': 'charizard-mega-y', 'id': 9, 'species_id': 6, 'height': 17, 'weight': 1005, 'base_experience': 285, 'type_1': 'fire', 'type_2': 'flying', 'attack': 104, 'defense': 78, 'hp': 78, 'special_attack': 159, 'special_defense': 115, 'speed': 100, 'ability_1': 'drought', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#F08030', 'color_2': '#A890F0', 'color_f': '#DE835E', 'egg_group_1': 'monster', 'egg_group_2': 'dragon', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png', 'generation_id': 'NA', 'evolves_from_species_id': 'NA', 'evolution_chain_id': 'NA', 'shape_id': 'NA', 'shape': 'NA', 'pokebase': 'charizard', 'pokedex': 'http://www.pokemon.com/us/pokedex/charizard' },
        { '_id': '5cef3501ef6005a77cd4fd1f', 'pokemon': 'squirtle', 'id': 10, 'species_id': 7, 'height': 5, 'weight': 90, 'base_experience': 63, 'type_1': 'water', 'type_2': 'NA', 'attack': 48, 'defense': 65, 'hp': 44, 'special_attack': 50, 'special_defense': 64, 'speed': 43, 'ability_1': 'torrent', 'ability_2': 'NA', 'ability_hidden': 'rain-dish', 'color_1': '#6890F0', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'water1', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 3, 'shape_id': 6, 'shape': 'upright', 'pokebase': 'squirtle', 'pokedex': 'http://www.pokemon.com/us/pokedex/squirtle' },
        { '_id': '5cef3501ef6005a77cd4fd20', 'pokemon': 'wartortle', 'id': 11, 'species_id': 8, 'height': 10, 'weight': 225, 'base_experience': 142, 'type_1': 'water', 'type_2': 'NA', 'attack': 63, 'defense': 80, 'hp': 59, 'special_attack': 65, 'special_defense': 80, 'speed': 58, 'ability_1': 'torrent', 'ability_2': 'NA', 'ability_hidden': 'rain-dish', 'color_1': '#6890F0', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'water1', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png', 'generation_id': 1, 'evolves_from_species_id': '7', 'evolution_chain_id': 3, 'shape_id': 6, 'shape': 'upright', 'pokebase': 'wartortle', 'pokedex': 'http://www.pokemon.com/us/pokedex/wartortle' },
        { '_id': '5cef3501ef6005a77cd4fd21', 'pokemon': 'blastoise', 'id': 12, 'species_id': 9, 'height': 16, 'weight': 855, 'base_experience': 239, 'type_1': 'water', 'type_2': 'NA', 'attack': 83, 'defense': 100, 'hp': 79, 'special_attack': 85, 'special_defense': 105, 'speed': 78, 'ability_1': 'torrent', 'ability_2': 'NA', 'ability_hidden': 'rain-dish', 'color_1': '#6890F0', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'water1', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png', 'generation_id': 1, 'evolves_from_species_id': '8', 'evolution_chain_id': 3, 'shape_id': 6, 'shape': 'upright', 'pokebase': 'blastoise', 'pokedex': 'http://www.pokemon.com/us/pokedex/blastoise' },
        { '_id': '5cef3501ef6005a77cd4fd22', 'pokemon': 'blastoise-mega', 'id': 13, 'species_id': 9, 'height': 16, 'weight': 1011, 'base_experience': 284, 'type_1': 'water', 'type_2': 'NA', 'attack': 103, 'defense': 120, 'hp': 79, 'special_attack': 135, 'special_defense': 115, 'speed': 78, 'ability_1': 'mega-launcher', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#6890F0', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'monster', 'egg_group_2': 'water1', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png', 'generation_id': 'NA', 'evolves_from_species_id': 'NA', 'evolution_chain_id': 'NA', 'shape_id': 'NA', 'shape': 'NA', 'pokebase': 'blastoise', 'pokedex': 'http://www.pokemon.com/us/pokedex/blastoise' },
        { '_id': '5cef3501ef6005a77cd4fd23', 'pokemon': 'caterpie', 'id': 14, 'species_id': 10, 'height': 3, 'weight': 29, 'base_experience': 39, 'type_1': 'bug', 'type_2': 'NA', 'attack': 30, 'defense': 35, 'hp': 45, 'special_attack': 20, 'special_defense': 20, 'speed': 45, 'ability_1': 'shield-dust', 'ability_2': 'NA', 'ability_hidden': 'run-away', 'color_1': '#A8B820', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 4, 'shape_id': 2, 'shape': 'squiggle', 'pokebase': 'caterpie', 'pokedex': 'http://www.pokemon.com/us/pokedex/caterpie' },
        { '_id': '5cef3501ef6005a77cd4fd24', 'pokemon': 'metapod', 'id': 15, 'species_id': 11, 'height': 7, 'weight': 99, 'base_experience': 72, 'type_1': 'bug', 'type_2': 'NA', 'attack': 20, 'defense': 55, 'hp': 50, 'special_attack': 25, 'special_defense': 25, 'speed': 30, 'ability_1': 'shed-skin', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#A8B820', 'color_2': 'NA', 'color_f': 'NA', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png', 'generation_id': 1, 'evolves_from_species_id': '10', 'evolution_chain_id': 4, 'shape_id': 2, 'shape': 'squiggle', 'pokebase': 'metapod', 'pokedex': 'http://www.pokemon.com/us/pokedex/metapod' },
        { '_id': '5cef3501ef6005a77cd4fd25', 'pokemon': 'beedrill', 'id': 19, 'species_id': 15, 'height': 10, 'weight': 295, 'base_experience': 178, 'type_1': 'bug', 'type_2': 'poison', 'attack': 90, 'defense': 40, 'hp': 65, 'special_attack': 45, 'special_defense': 80, 'speed': 75, 'ability_1': 'swarm', 'ability_2': 'NA', 'ability_hidden': 'sniper', 'color_1': '#A8B820', 'color_2': '#A040A0', 'color_f': '#A69A3F', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png', 'generation_id': 1, 'evolves_from_species_id': '14', 'evolution_chain_id': 5, 'shape_id': 13, 'shape': 'bug-wings', 'pokebase': 'beedrill', 'pokedex': 'http://www.pokemon.com/us/pokedex/beedrill' },
        { '_id': '5cef3501ef6005a77cd4fd26', 'pokemon': 'weedle', 'id': 17, 'species_id': 13, 'height': 3, 'weight': 32, 'base_experience': 39, 'type_1': 'bug', 'type_2': 'poison', 'attack': 35, 'defense': 30, 'hp': 40, 'special_attack': 20, 'special_defense': 20, 'speed': 50, 'ability_1': 'shield-dust', 'ability_2': 'NA', 'ability_hidden': 'run-away', 'color_1': '#A8B820', 'color_2': '#A040A0', 'color_f': '#A69A3F', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 5, 'shape_id': 2, 'shape': 'squiggle', 'pokebase': 'weedle', 'pokedex': 'http://www.pokemon.com/us/pokedex/weedle' },
        { '_id': '5cef3501ef6005a77cd4fd27', 'pokemon': 'kakuna', 'id': 18, 'species_id': 14, 'height': 6, 'weight': 100, 'base_experience': 72, 'type_1': 'bug', 'type_2': 'poison', 'attack': 25, 'defense': 50, 'hp': 45, 'special_attack': 25, 'special_defense': 25, 'speed': 35, 'ability_1': 'shed-skin', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#A8B820', 'color_2': '#A040A0', 'color_f': '#A69A3F', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png', 'generation_id': 1, 'evolves_from_species_id': '13', 'evolution_chain_id': 5, 'shape_id': 2, 'shape': 'squiggle', 'pokebase': 'kakuna', 'pokedex': 'http://www.pokemon.com/us/pokedex/kakuna' },
        { '_id': '5cef3501ef6005a77cd4fd28', 'pokemon': 'beedrill-mega', 'id': 20, 'species_id': 15, 'height': 140, 'weight': 405, 'base_experience': 223, 'type_1': 'bug', 'type_2': 'poison', 'attack': 150, 'defense': 40, 'hp': 65, 'special_attack': 15, 'special_defense': 80, 'speed': 145, 'ability_1': 'adaptability', 'ability_2': 'NA', 'ability_hidden': 'NA', 'color_1': '#A8B820', 'color_2': '#A040A0', 'color_f': '#A69A3F', 'egg_group_1': 'bug', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png', 'generation_id': 'NA', 'evolves_from_species_id': 'NA', 'evolution_chain_id': 'NA', 'shape_id': 'NA', 'shape': 'NA', 'pokebase': 'beedrill', 'pokedex': 'http://www.pokemon.com/us/pokedex/beedrill' },
        { '_id': '5cef3501ef6005a77cd4fd29', 'pokemon': 'pidgey', 'id': 21, 'species_id': 16, 'height': 3, 'weight': 18, 'base_experience': 50, 'type_1': 'normal', 'type_2': 'flying', 'attack': 45, 'defense': 40, 'hp': 40, 'special_attack': 35, 'special_defense': 35, 'speed': 56, 'ability_1': 'keen-eye', 'ability_2': 'tangled-feet', 'ability_hidden': 'big-pecks', 'color_1': '#A8A878', 'color_2': '#A890F0', 'color_f': '#A8A295', 'egg_group_1': 'flying', 'egg_group_2': 'NA', 'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png', 'generation_id': 1, 'evolves_from_species_id': 'NA', 'evolution_chain_id': 6, 'shape_id': 9, 'shape': 'wings', 'pokebase': 'pidgey', 'pokedex': 'http://www.pokemon.com/us/pokedex/pidgey' }
    ]
    const idToRemove = '5cef3501ef6005a77cd4fd1c';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getArrayWithoutObjWithIdFromArray(idToRemove, pokemonData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('isIdInArray returns true if id is in array, false if not', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arrayForTest = ['one', 'two', 'three', 'four', 'five'];
    const expected1 = true;
    const expected2 = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const item1 = 'two';
    const actual1 = isItemInArray(item1, arrayForTest);

    const item2 = 'six';
    const actual2 = isItemInArray(item2, arrayForTest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected1, actual1);
    expect.equal(expected2, actual2);
});

test('removeItemFromArray returns an array without the item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arrayForTest = ['one', 'two', 'three', 'four', 'five'];
    const expected1 = ['one', 'three', 'four', 'five'];

    //Act 
    // Call the function you're testing and set the result to a const
    const item1 = 'two';
    const actual1 = removeItemFromArray(item1, arrayForTest);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected1, actual1);
});