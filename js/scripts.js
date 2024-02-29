var user = 'Mr. Hunsicker';
    salutation = 'Hey, ';
    greeting = salutation + user + '! Here is the latest on the Antetokounmpo brothers.';
    greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;

var brother1 = { name: 'Kostas', netWorth: 5000000 };
    brother2 = { name: 'Giannis', netWorth: 80000000 };
    brother3 = { name: 'Alex', netWorth: 4000000 };
    brother4 = { name: 'Francis', netWorth: 1000000 };
    brother5 = { name: 'Thanasis', netWorth: 8000000 };
    totalNetWorth = brother1.netWorth + brother2.netWorth + brother3.netWorth + brother4.netWorth + brother5.netWorth;
    formatNetWorth = function (netWorth) 
    {
    return netWorth.toLocaleString();    
    };

    brother1El = document.getElementById('brother1');
    brother2El = document.getElementById('brother2');
    brother3El = document.getElementById('brother3');
    brother4El = document.getElementById('brother4');
    brother5El = document.getElementById('brother5');
    totalNetWorthEl = document.getElementById('total-net-worth');

    brother1El.textContent = `${brother1.name} : ~$${formatNetWorth(brother1.netWorth)}`;
    brother2El.textContent = `${brother2.name} : ~$${formatNetWorth(brother2.netWorth)}`;
    brother3El.textContent = `${brother3.name} : ~$${formatNetWorth(brother3.netWorth)}`;
    brother4El.textContent = `${brother4.name} : ~$${formatNetWorth(brother4.netWorth)}`;
    brother5El.textContent = `${brother5.name} : ~$${formatNetWorth(brother5.netWorth)}`;
    totalNetWorthEl.textContent = `FAMILY NET WORTH: ~$${formatNetWorth(totalNetWorth)}`;
