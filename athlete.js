var _0x235149=_0x49bd;(function(_0x5c32fc,_0x4c158f){var _0x25fb12=_0x49bd,_0x5eb30f=_0x5c32fc();while(!![]){try{var _0x496190=-parseInt(_0x25fb12(0x18a))/0x1+-parseInt(_0x25fb12(0x15b))/0x2+parseInt(_0x25fb12(0x19f))/0x3*(parseInt(_0x25fb12(0x16f))/0x4)+parseInt(_0x25fb12(0x1a1))/0x5+-parseInt(_0x25fb12(0x160))/0x6*(-parseInt(_0x25fb12(0x1a2))/0x7)+-parseInt(_0x25fb12(0x195))/0x8*(-parseInt(_0x25fb12(0x17b))/0x9)+-parseInt(_0x25fb12(0x16d))/0xa;if(_0x496190===_0x4c158f)break;else _0x5eb30f['push'](_0x5eb30f['shift']());}catch(_0x411d69){_0x5eb30f['push'](_0x5eb30f['shift']());}}}(_0x3717,0x24e9b));var allItems=[],currentPage=0x1,itemsPerPage=0x19,filteredItems=[];document['addEventListener'](_0x235149(0x1a4),function(){var _0x130c24=_0x235149,_0x5e5050=localStorage[_0x130c24(0x19a)](_0x130c24(0x1a5));_0x5e5050?(console['log'](_0x130c24(0x173),_0x5e5050),fetchItems(_0x5e5050)):(console['log'](_0x130c24(0x1a9)),document[_0x130c24(0x1a0)](_0x130c24(0x18f))[_0x130c24(0x191)]=_0x130c24(0x192));var _0x483d36=localStorage[_0x130c24(0x19a)](_0x130c24(0x199)),_0x58b9ca=localStorage[_0x130c24(0x19a)](_0x130c24(0x1a5));if(!_0x483d36||!_0x58b9ca){window[_0x130c24(0x169)][_0x130c24(0x1a3)]='status.html';return;}if(_0x483d36===_0x130c24(0x164)){window[_0x130c24(0x169)][_0x130c24(0x1a3)]=_0x130c24(0x185);return;}document['getElementById'](_0x130c24(0x17c))[_0x130c24(0x189)](_0x130c24(0x15d),filterItems),document['getElementById']('date-selector')[_0x130c24(0x189)]('change',filterItems),document[_0x130c24(0x1a0)](_0x130c24(0x196))[_0x130c24(0x189)](_0x130c24(0x194),filterItems),document[_0x130c24(0x1a0)]('page-input')[_0x130c24(0x189)](_0x130c24(0x17f),function(_0x3a404a){var _0x1de925=_0x130c24;if(_0x3a404a['key']===_0x1de925(0x197)){var _0x36fcac=parseInt(_0x3a404a[_0x1de925(0x18c)][_0x1de925(0x180)]);!isNaN(_0x36fcac)&&_0x36fcac>=0x1&&_0x36fcac<=Math['ceil'](filteredItems[_0x1de925(0x17e)]/ itemsPerPage)?(currentPage=_0x36fcac,displayItems(currentPage),updatePageNav(currentPage)):alert('Invalid\x20page\x20number');}});});function _0x3717(){var _0xb75989=['date','className','hasOwnProperty','ceil','2421RFnzsZ','search-input','responseText','length','keypress','value','min','src','toLowerCase','stade-image','visitor.html','GET','setItem','from','addEventListener','295420ZQxnCp','includes','target','map','onerror','items-list','<strong>','innerHTML','<p>No\x20sport\x20selected\x20or\x20data\x20available.</p>','date-selector','change','4744qHSOQA','stade-selector','Enter','.jpg','userStatus','getItem','img/stades/default.jpg','Failed\x20to\x20fetch\x20items:','Fetched\x20items:','page-count','3VwCAtm','getElementById','326745EaNFRh','9121DWFtrv','href','DOMContentLoaded','userSport','error','.jpeg','Select\x20Stade','No\x20sport\x20found\x20in\x20storage.','Stored\x20unique\x20cities:','147958qxUASz','div','input','open','status','1176OGJhnK','send','Network\x20error.','villes','Visitor','weather.html','appendChild','img/stades/','option','location','log','stades','Error\x20parsing\x20JSON!','975860EZqwMy','createElement','551704NmhMlV','evenement','onload','filter','Athlete\x27s\x20Sport:','textContent','click','dataset'];_0x3717=function(){return _0xb75989;};return _0x3717();}function fetchItems(_0x1074dc){var _0x4990ab=_0x235149,_0x544e67=new XMLHttpRequest();_0x544e67[_0x4990ab(0x15e)](_0x4990ab(0x186),'get_items.php',!![]),_0x544e67[_0x4990ab(0x171)]=function(){var _0x4babb1=_0x4990ab;if(_0x544e67[_0x4babb1(0x15f)]===0xc8)try{allItems=JSON['parse'](_0x544e67[_0x4babb1(0x17d)]),console[_0x4babb1(0x16a)](_0x4babb1(0x19d),allItems),extractAndPopulateDropdowns(_0x1074dc),filterItems();}catch(_0x4e4dd2){console[_0x4babb1(0x1a6)](_0x4babb1(0x16c),_0x4e4dd2);}else console[_0x4babb1(0x1a6)](_0x4babb1(0x19c),_0x544e67['statusText']);},_0x544e67[_0x4990ab(0x18e)]=function(){var _0x5d04e5=_0x4990ab;console[_0x5d04e5(0x1a6)](_0x5d04e5(0x162));},_0x544e67[_0x4990ab(0x161)]();}function extractAndPopulateDropdowns(_0x45900b){var _0x2a5aa0=_0x235149;let _0x473294=Array[_0x2a5aa0(0x188)](new Set(allItems[_0x2a5aa0(0x172)](_0x350b67=>_0x350b67[_0x2a5aa0(0x170)]===_0x45900b)[_0x2a5aa0(0x18d)](_0x426c59=>_0x426c59['date']))),_0x414389=Array['from'](new Set(allItems[_0x2a5aa0(0x172)](_0x27fa8f=>_0x27fa8f['evenement']===_0x45900b)[_0x2a5aa0(0x18d)](_0x274c91=>_0x274c91[_0x2a5aa0(0x16b)])));populateDropdown(_0x2a5aa0(0x193),_0x473294),populateDropdown(_0x2a5aa0(0x196),_0x414389);}function populateDropdown(_0x4478d9,_0x3f30ff){var _0x595f69=_0x235149,_0x149d08=document[_0x595f69(0x1a0)](_0x4478d9);_0x149d08[_0x595f69(0x191)]='';var _0x4e2e1b=document['createElement'](_0x595f69(0x168));_0x4e2e1b[_0x595f69(0x174)]=_0x4478d9==='date-selector'?'Select\x20Date':_0x595f69(0x1a8),_0x4e2e1b[_0x595f69(0x180)]='',_0x149d08[_0x595f69(0x166)](_0x4e2e1b),_0x3f30ff['forEach'](function(_0x4716ff){var _0x5e9994=_0x595f69,_0x2dcdbe=document[_0x5e9994(0x16e)](_0x5e9994(0x168));_0x2dcdbe[_0x5e9994(0x180)]=_0x2dcdbe[_0x5e9994(0x174)]=_0x4716ff,_0x149d08[_0x5e9994(0x166)](_0x2dcdbe);});}function filterItems(){var _0x1d8de0=_0x235149,_0x24eee2=document['getElementById'](_0x1d8de0(0x17c))[_0x1d8de0(0x180)][_0x1d8de0(0x183)](),_0x5aed4c=document[_0x1d8de0(0x1a0)](_0x1d8de0(0x193))[_0x1d8de0(0x180)],_0x39f6d6=document['getElementById'](_0x1d8de0(0x196))['value'][_0x1d8de0(0x183)](),_0x375112=localStorage[_0x1d8de0(0x19a)](_0x1d8de0(0x1a5))[_0x1d8de0(0x183)]();filteredItems=allItems[_0x1d8de0(0x172)](function(_0x45da4f){var _0x11c0ed=_0x1d8de0;return _0x45da4f[_0x11c0ed(0x170)][_0x11c0ed(0x183)]()===_0x375112&&(_0x5aed4c===''||_0x45da4f[_0x11c0ed(0x177)][_0x11c0ed(0x18b)](_0x5aed4c))&&(_0x39f6d6===''||_0x45da4f['stades'][_0x11c0ed(0x183)]()['includes'](_0x39f6d6))&&_0x45da4f[_0x11c0ed(0x163)]['toLowerCase']()['includes'](_0x24eee2);}),console['log']('Filtered\x20items:',filteredItems);var _0x393e03=Array[_0x1d8de0(0x188)](new Set(filteredItems['map'](function(_0x5effe5){var _0x5ab3ec=_0x1d8de0;return _0x5effe5[_0x5ab3ec(0x163)];})));localStorage[_0x1d8de0(0x187)]('filteredCities',JSON['stringify'](_0x393e03)),console[_0x1d8de0(0x16a)](_0x1d8de0(0x1aa),_0x393e03),displayItems(0x1),updatePageNav(0x1);}function displayItems(_0x22c1bb){var _0x4c640d=_0x235149,_0x1194b5=document[_0x4c640d(0x1a0)]('items-list');_0x1194b5[_0x4c640d(0x191)]='';var _0x320d24=(_0x22c1bb-0x1)*itemsPerPage,_0x5833d2=Math[_0x4c640d(0x181)](_0x320d24+itemsPerPage,filteredItems[_0x4c640d(0x17e)]);for(var _0x34459e=_0x320d24;_0x34459e<_0x5833d2;_0x34459e++){var _0x1e9250=filteredItems[_0x34459e],_0x4fd27e=createItemContainer(_0x1e9250);_0x1194b5['appendChild'](_0x4fd27e);}}function createItemContainer(_0x8c06cb){var _0x393140=_0x235149,_0x25a53c=document[_0x393140(0x16e)](_0x393140(0x15c));_0x25a53c[_0x393140(0x178)]='item-container',_0x25a53c[_0x393140(0x176)]['id']=_0x8c06cb['id'];var _0x5b356a=document[_0x393140(0x16e)]('img');_0x5b356a[_0x393140(0x178)]=_0x393140(0x184),_0x5b356a['src']=_0x393140(0x167)+encodeURIComponent(_0x8c06cb['stades'])+_0x393140(0x198),_0x5b356a[_0x393140(0x18e)]=function(){var _0x5e5b32=_0x393140;tryNextFormat(_0x5b356a,_0x8c06cb[_0x5e5b32(0x16b)],0x0);},_0x25a53c[_0x393140(0x166)](_0x5b356a);var _0x52f4a4=document['createElement']('div');_0x52f4a4[_0x393140(0x178)]='item-details';var _0x11d39b={'Événement':_0x8c06cb[_0x393140(0x170)],'Lieu':_0x8c06cb[_0x393140(0x16b)],'Ville':_0x8c06cb['villes'],'Date':_0x8c06cb['date'],'Temps':_0x8c06cb['temps'],'Détails':_0x8c06cb['nom']};for(var _0x59799b in _0x11d39b){if(_0x11d39b[_0x393140(0x179)](_0x59799b)){var _0x514512=document[_0x393140(0x16e)]('p');_0x514512[_0x393140(0x191)]=_0x393140(0x190)+_0x59799b+':</strong>\x20'+_0x11d39b[_0x59799b],_0x52f4a4[_0x393140(0x166)](_0x514512);}}return _0x25a53c[_0x393140(0x166)](_0x52f4a4),_0x25a53c;}function tryNextFormat(_0x1d90ca,_0x4f16b4,_0x244cae){var _0x5ce13d=_0x235149,_0x5b5e9b=['.jpg',_0x5ce13d(0x1a7),'.png'];_0x244cae<_0x5b5e9b['length']?(_0x1d90ca[_0x5ce13d(0x182)]=_0x5ce13d(0x167)+encodeURIComponent(_0x4f16b4)+_0x5b5e9b[_0x244cae],_0x1d90ca[_0x5ce13d(0x18e)]=function(){tryNextFormat(_0x1d90ca,_0x4f16b4,_0x244cae+0x1);}):_0x1d90ca['src']=_0x5ce13d(0x19b);}function updatePageNav(_0x1ee2f2){var _0x226e2e=_0x235149,_0x40c133=Math[_0x226e2e(0x17a)](filteredItems[_0x226e2e(0x17e)]/ itemsPerPage);document['getElementById']('page-input')[_0x226e2e(0x180)]=_0x1ee2f2,document[_0x226e2e(0x1a0)](_0x226e2e(0x19e))[_0x226e2e(0x174)]='/\x20'+_0x40c133;}function _0x49bd(_0xf227d9,_0x4a6319){var _0x37170b=_0x3717();return _0x49bd=function(_0x49bd4b,_0x288878){_0x49bd4b=_0x49bd4b-0x15b;var _0x38519e=_0x37170b[_0x49bd4b];return _0x38519e;},_0x49bd(_0xf227d9,_0x4a6319);}document[_0x235149(0x189)](_0x235149(0x1a4),function(){var _0x5300c3=_0x235149;document[_0x5300c3(0x1a0)]('go-to-weather')[_0x5300c3(0x189)](_0x5300c3(0x175),function(){var _0x3c9b17=_0x5300c3;window[_0x3c9b17(0x169)][_0x3c9b17(0x1a3)]=_0x3c9b17(0x165);});});