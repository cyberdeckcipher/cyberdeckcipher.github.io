import React, { useRef, useEffect } from 'react';
import Pallete from '../../Styles/Pallete.json';
import './RotatingCube.css';

const Point3D = (a,b,c) => {
    return ({
        x: a,
        y: b,
        z: c
    })
};

const GetRotatingCubeStyle = () => {
    return {
        display: 'block',
        position: 'absolute',
        width: '50%',
        height: '50%'
    }
};

// const SpeedX = 0.005;
// const SpeedY = 0.005;
// const SpeedZ = 0.005;
var CubeX, CubeY, CubeZ, CubeSize = 0;
var DeltaTime, LastTime, CubeHeight, CubeWidth = 0;

let ctx      = null;
var Vertices = null;
var Edges    = null;

const loop = (currentTime) =>{
    if(ctx !== null){
        DeltaTime = currentTime - LastTime;
        LastTime = currentTime;

        ctx.fillRect(0,0,CubeWidth,CubeHeight);

        // console.log('fillStyle >>>'+ctx.fillStyle);
        // console.log('strokeStyle >>>'+ctx.strokeStyle);
        // console.log('lineWidth >>>'+ctx.lineWidth);
        // console.log('linecap >>>'+ctx.linecap);

        for(let edge of Edges){
            ctx.beginPath();
            ctx.moveTo(Vertices[edge[0]].x,Vertices[edge[0]].y);
            ctx.lineTo(Vertices[edge[1]].x,Vertices[edge[1]].y);
            ctx.stroke();
        }
    }
    //requestAnimationFrame(loop);
}

const RotatingCube = () => {
    const canvas = useRef();
    if(DeltaTime == null) DeltaTime = 0;
   
    useEffect(() => {
      const canvasEle = canvas.current;
      canvasEle.width  = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;

      CubeHeight = canvasEle.height;
      CubeWidth  = canvasEle.width;

      console.log('>>> Width:'+CubeWidth+' Height:'+CubeHeight);

      CubeY = CubeHeight/2;
      CubeX = CubeWidth/2;
      CubeZ = 0;
      CubeSize = CubeWidth / 4;

      
      console.log("Canvas Co-ordinates: ("+canvasEle.offsetLeft+", "+canvasEle.offsetTop +")");
      console.log("Cube Co-ordinates: ("+CubeX+", "+CubeY+")");

      Vertices = [
        Point3D(CubeX - CubeSize, CubeY - CubeSize, CubeZ - CubeSize ),
        Point3D(CubeX + CubeSize, CubeY - CubeSize, CubeZ - CubeSize ),
        Point3D(CubeX + CubeSize, CubeY + CubeSize, CubeZ - CubeSize ),
        Point3D(CubeX - CubeSize, CubeY + CubeSize, CubeZ - CubeSize ),
        Point3D(CubeX - CubeSize, CubeY - CubeSize, CubeZ + CubeSize ),
        Point3D(CubeX + CubeSize, CubeY - CubeSize, CubeZ + CubeSize ),
        Point3D(CubeX + CubeSize, CubeY + CubeSize, CubeZ + CubeSize ),
        Point3D(CubeX - CubeSize, CubeY + CubeSize, CubeZ + CubeSize )
      ];
      Edges = [
        [0,1],[1,2],[2,3],[3,4],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];

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