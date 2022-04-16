import React, { useRef, useEffect } from 'react';
import Pallete from '../../Styles/Pallete.json';
import './RotatingCube.css';

const GetRotatingCubeStyle = () => {
    return {
        display: 'block',
        position: 'absolute',
        width: '50%',
        height: '50%',
        backgroundColor: Pallete.appYellow
    }
}

const SpeedX = 0.005;
const SpeedY = 0.005;
const SpeedZ = 0.005;
const Point3D = (x,y,z) => {this.x = x; this.y = y; this.z = z;}
var CubeX, CubeY, CubeZ, CubeSize = 0;
var DeltaTime, LastTime, CubeHeight, CubeWidth = 0;
let ctx = null;
var vertices = null;

const loop = (currentTime) =>{
    if(ctx !== null){
        DeltaTime = currentTime - LastTime;
        LastTime = currentTime;

        ctx.fillRect(0,0,CubeWidth,CubeHeight);

        console.log('fillStyle >>>'+ctx.fillStyle);
        console.log('strokeStyle >>>'+ctx.strokeStyle);
        console.log('lineWidth >>>'+ctx.lineWidth);
        console.log('linecap >>>'+ctx.linecap);
    }
    //requestAnimationFrame(loop);
}

const RotatingCube = () => {
    const canvas = useRef();
    if(DeltaTime == null) DeltaTime = 0;
   
    // initialize the canvas context
    useEffect(() => {
      // dynamically assign the width and height to canvas
      const canvasEle = canvas.current;
      CubeHeight = canvas.current.clientWidth;
      CubeWidth = canvas.current.clientHeight;
      console.log('>>> Width:'+CubeWidth+' Height:'+CubeHeight);

      CubeY = CubeHeight/2;
      CubeX = CubeWidth/2;
      CubeZ = 0;
      CubeSize = CubeHeight / 4;

    //   vertices = [
    //       new Point3D(CubeX - CubeSize),
    //   ]

      // get context of the canvas
      ctx = canvasEle.getContext("2d");
      ctx.fillStyle = Pallete.background;
      ctx.strokeStyle = Pallete.appYellow;
      ctx.lineWidth = CubeWidth/100;
      ctx.linecap = 'round';
      
      requestAnimationFrame(loop);
    }, []);

    return (
        <canvas style={GetRotatingCubeStyle()} ref={canvas}></canvas>
    );
}

export default RotatingCube;