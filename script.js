btns_list = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6", "btn-7", "btn-8", "btn-9"];
const whoTurnTxt = document.getElementById('whoTurnIs');
const Restarn_btn = document.getElementById('Restart');
const Crosses_id = document.getElementById('Crosses');
const Zeros_id = document.getElementById('Zeros');
var Player_one_turn = true;
var Crosses = 0;
var Zeros = 0;

function whichBtn(event, obj) 
{
    let btn = document.getElementById(obj.id);
 
    if (event.button == '0') 
    {
        if (Player_one_turn == true) 
        {
            btn.textContent = 'x';
            whoTurnTxt.textContent = "Player's 2 turn!";
            btn.setAttribute('disabled', true);
    
            Player_one_turn = false;
        };
    }
    else if (event.button == '1') 
    {
        if (Player_one_turn == false) 
        {
            btn.textContent = 'o';
            whoTurnTxt.textContent = "Player's 1 turn!";
            btn.setAttribute('disabled', true);
    
            Player_one_turn = true; 
        }
    }

    WinnerCheck();
};



function WinnerCheck() 
{
    //draw check
    let disabled_btns = 0;
    btns_list.forEach(element => {
        let btn = document.getElementById(element)
        if (btn.disabled == true) {
            disabled_btns++;
        };
    });

    if (disabled_btns == 9) {
        Draw();
    };
    
    //horizontaly lines equalness check
    for (let i = 1; i < 4; i++) 
    {
        let btn_1 = document.getElementById(`btn-${i}`);
        let btn_2 = document.getElementById(`btn-${i+3}`);
        let btn_3 = document.getElementById(`btn-${i+6}`);

        if (btn_1.textContent == 'x' && btn_2.textContent == 'x' && btn_3.textContent == 'x') 
        {
            GameOver('1');

        } else if (btn_1.textContent == 'o' && btn_2.textContent == 'o' && btn_3.textContent == 'o')
        {
            GameOver('2');
        };
    };

    //verticaly lines equalness check
    Verticaly_list_check = [1, 4, 7];
    Verticaly_list_check.forEach(el => {
        let btn_1 = document.getElementById(`btn-${el}`);
        let btn_2 = document.getElementById(`btn-${el+1}`);
        let btn_3 = document.getElementById(`btn-${el+2}`);

        if (btn_1.textContent == 'x' && btn_2.textContent == 'x' && btn_3.textContent == 'x') 
        {
            GameOver('1');

        } else if (btn_1.textContent == 'o' && btn_2.textContent == 'o' && btn_3.textContent == 'o')
        {
            GameOver('2');
        };
    }); 

    function dioganally_lines_check(a, b, c) 
    {
        //diagonaly lines equalness check
        let btn_1 = document.getElementById(`btn-${a}`);
        let btn_2 = document.getElementById(`btn-${b}`);
        let btn_3 = document.getElementById(`btn-${c}`);

        if (btn_1.textContent == 'x' && btn_2.textContent == 'x' && btn_3.textContent == 'x') 
        {
            GameOver('1');

        } else if (btn_1.textContent == 'o' && btn_2.textContent == 'o' && btn_3.textContent == 'o')
        {
            GameOver('2');
        };
    };

    dioganally_lines_check(1, 5, 9);
    dioganally_lines_check(3, 5, 7);
    
};



function disable_btns() 
{
    btns_list.forEach(element => {
        let btn = document.getElementById(element)
        btn.setAttribute('disabled', true);
    });
};

function active_btns() 
{
    btns_list.forEach(element => {
        let btn = document.getElementById(element)
        btn.removeAttribute('disabled');
        btn.textContent = '';
    });
};



function GameOver(Player) 
{
    disable_btns();

    whoTurnTxt.textContent = `Player's ${Player} won!`;
    Restarn_btn.style.display = 'flex';

    if (Player == '1') 
    {
        Crosses += 1;
        Crosses_id.textContent = `Crosses: ${Crosses}`;
    }
    else if (Player == '2')
    {
        Zeros += 1;
        Zeros_id.textContent = `Zeros: ${Zeros}`;
    }


    Player_one_turn = true;
}

function Restart() 
{
    active_btns();

    whoTurnTxt.textContent = "Player's 1 turn!"
    Restarn_btn.style.display = 'none';
    Player_one_turn = true; 
}

function Draw() 
{
    disable_btns();

    whoTurnTxt.textContent = `Draw!`;
    Restarn_btn.style.display = 'flex';
    Player_one_turn = true; 
};
