/* en el mundo real nos piden hacer tareas repetitivas 
como en la escuela la clasica plana , a mike le pidieron hacer
plana con nombres del estado de estados unidos para memorizarlos 
como se muestra:

Me encantaria visitar Michigan...
Me encantaria visitar Texas... 
ahora imaginate que estados unidos tiene 50 estados.
ayuda a mike a crear con ciclo for y while para terminar esta tediosa tarea.*/


const estados = ['Alabama (AL)', 'Alaska (AK)', 'Arizona (AZ)', 'Arkansas (AR)', 'California (CA)',
'Carolina del Norte (NC)', 'Carolina del Sur (SC)', 'Colorado (CO)', 'Connecticut (CT)', 'Dakota del Norte (ND)', 'Dakota del Sur (SD)', 'Delaware (DE)', 'Florida (FL)', 'Georgia (GA)', 'Hawái (HI)', 'Idaho (ID)', 'Illinois (IL)', 'Indiana (IN)', 'Iowa (IA)', 'Kansas (KS)', 'Kentucky (KY)', 'Luisiana (LA)', 'Maine (ME)', 'Maryland (MD)', 'Massachusetts (MA)', 'Míchigan (MI)', 'Minnesota (MN)', 'Misisipi (MS)', 'Misuri (MO)', 'Montana (MT)', 'Nebraska (NE)', 'Nevada (NV)', 'Nueva Jersey (NJ)', 'Nueva York (NY)', 'Nuevo Hampshire (NH)', 'Nuevo México (NM)', 'Ohio (OH)', 'Oklahoma (OK)', 'Oregón (OR)', 'Pensilvania (PA)', 'Rhode Island (RI)', 'Tennessee (TN)', 'Texas (TX)', 'Utah (UT)', 'Vermont (VT)', 'Virginia (VA)', 'Virginia Occidental (WV)', 'Washington (WA)', 'Wisconsin (WI)', 'Wyoming (WY)'
];

console.log(estados)

// escribe el ciclo for

console.log('conteo con for')

for (let i = 0; i < estados.length; i++) {
	console.log(`Me encantaria visitar ${estados[i]}`);
}

// escribe el ciclo while 

console.log('Conteo con while')

let j = 0;

while (j < estados.length) {
	console.log(` Me gustaria visitar ${estados[j]}`);
	j++;
}