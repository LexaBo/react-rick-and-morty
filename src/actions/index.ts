import * as CharactersActionCreators from './characters'
import * as CharacterActionCreators from './character'
import * as FiltersActionCreators from './filters'

export default {
    ...CharactersActionCreators,
    ...CharacterActionCreators,
    ...FiltersActionCreators
}