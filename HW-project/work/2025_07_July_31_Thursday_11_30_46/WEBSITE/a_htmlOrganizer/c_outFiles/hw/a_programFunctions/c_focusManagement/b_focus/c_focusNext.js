function focusNext(del)     {

if (utilityLayer0.children.length>0) {
if (curFocus==1) { curFocus=0; coinFocus.style.outline = fB; };

if (coinFocus!=null&&coinFocus.nextElementSibling) {
coinFocus.style.outline = fA;
setCoinTripColouration();
coinFocus1=coinFocus;
coinFocus = coinFocus.nextElementSibling;
coinFocus.style.outline = fB;
if (!del) {
coinFocus.scrollIntoView({behavior: 'smooth'});
}
return (1);

}

} else {
return (0);
}

}
