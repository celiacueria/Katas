


function sheldonGame(tiradaPlayer1,tiradaPlayer2){
    if(((tiradaPlayer1=='tijeras')&&(tiradaPlayer2=='papel'))|| ((tiradaPlayer1=='papel')&&(tiradaPlayer2=='tijeras'))){
    return 'Las tijeras cortan papel'
    }

    if(((tiradaPlayer1=='papel')&&(tiradaPlayer2=='roca'))||((tiradaPlayer1=='roca')&&(tiradaPlayer2=='papel'))){
    return 'El papel cubre la roca'
    }

    if(((tiradaPlayer1=='lagarto')&&(tiradaPlayer2=='roca'))||((tiradaPlayer1=='roca')&&(tiradaPlayer2=='lagarto'))){
        return 'Lagarto aplasta la roca'
    }

    if(((tiradaPlayer1=='lagarto')&&(tiradaPlayer2=='Spock'))||((tiradaPlayer1=='Spock')&&(tiradaPlayer2=='lagarto'))){
        return 'Lagarto envenena a Spock'
    }

    if(((tiradaPlayer1=='Spock')&&(tiradaPlayer2=='tijeras'))||((tiradaPlayer1=='tijeras')&&(tiradaPlayer2=='Spock'))){
        return 'Spock rompe las tijeras'
    }

    if(((tiradaPlayer1=='tijeras')&&(tiradaPlayer2=='lagarto'))||((tiradaPlayer1=='lagarto')&&(tiradaPlayer2=='tijeras'))){
    return 'Tijeras decapitan a lagarto' 
    }
    if(((tiradaPlayer1=='lagarto')&&(tiradaPlayer2=='papel'))||((tiradaPlayer1=='papel')&&(tiradaPlayer2=='lagarto'))){
    return 'Lagarto come papel' 
    }
            
    if(((tiradaPlayer1=='papel')&&(tiradaPlayer2=='Spock'))||((tiradaPlayer1=='Spock')&&(tiradaPlayer2=='papel'))){
        return 'El papel refuta a Spock' 
    }

    if(((tiradaPlayer1=='Spock')&&(tiradaPlayer2=='roca'))||((tiradaPlayer1=='roca')&&(tiradaPlayer2=='Spock'))){
        return 'Spock vaporiza la roca' 
    }
    
    if(((tiradaPlayer1=='tijeras')&&(tiradaPlayer2=='roca'))||((tiradaPlayer1=='roca')&&(tiradaPlayer2=='tijeras'))){
        return 'Tijeras para romper rocas' 
    }
       
    
}


module.exports = sheldonGame;