import { createActionCardTable } from "/systems/swade/module/util.js"; 

Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
            Babele.get().register({
                module: 'swade-es',
                lang: 'es',
                dir: 'compendium/es'
            });
            Babele.get().register({
                module: 'swade-es',
                lang: 'ca',
                dir: 'compendium/ca'
            });
            Babele.get().register({
                module: 'swade-es',
                lang: 'gl',
                dir: 'compendium/gl'
            });
            Babele.get().register({
                module: 'swade-es',
                lang: 'eu',
                dir: 'compendium/eu'
            });
            console.log("swade-es compendiums translate enabled");
		}
});

Hooks.on('ready', () => {
    console.log(`Repopulating action cards Table with cards from deck.` + game.settings.get('swade', 'cardDeck'));
    createActionCardTable(true); //aqui da error
});

Hooks.on('createActor', async (actor, options, userId) => {
    
    let swadeRbActive = game.modules.get("swade-rb")?.active;
    
});
