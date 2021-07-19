// Falsy (0, '', NaN, undefined, null, false);
// Todos os demais são considerados true;

0 ? console.log('true') : console.log('0 is false');
!'' ? console.log('true') : console.log(' \'\' is false');
NaN ? console.log('true') : console.log('NaN is false');
undefined ? console.log('true') : console.log('undefined is false');
null ? console.log('true') : console.log('null is false');
false ? console.log('true') : console.log('false is false');