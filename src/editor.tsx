import MojsCurveEditor from "@mojs/curve-editor"
import mojs from "@mojs/core";
function Editor (){
    const myCurve = new MojsCurveEditor({name: 'myCurve'});

    const tween = new mojs.Tween({
      easing: myCurve.getEasing()
    });
    const shape = new mojs.Shape({
        easing: myCurve.getEasing()
      });
    
      // or as `property curve`
    
      const html = new mojs.Html({
        el: '#js-el',
        x: { 0: 100, curve: myCurve.getEasing() }
      });
return(
    <div>testt</div>
)
}
export  default Editor