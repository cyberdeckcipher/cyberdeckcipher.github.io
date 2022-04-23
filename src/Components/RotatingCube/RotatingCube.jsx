import React, { useRef, useEffect } from 'react';
import Pallete from '../../Styles/Pallete.json';

const Point3D = (a,b,c) => {
    return ({
        x: a,
        y: b,
        z: c
    })
};

const GetRotatingCubeDivStyle = () => {
    return {
        display: 'block',
        position: 'absolute',
        width: '50%',
        height: '99%'
    }
};

const GetRotatingCubeStyle = () => {
    return {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

const Speed = Point3D(0.005, 0.01, 0.015);

var CubeX      = 0;
var CubeY      = 0;
var CubeZ      = 0;
var CubeSize   = 0;
var DeltaTime  = 0;
var LastTime   = 0;
var CubeHeight = 0;
var CubeWidth  = 0;

let ctx      = null;
var Vertices = null;
var Edges    = null;

const loop = (currentTime) =>{
    if(ctx !== null){
        DeltaTime = currentTime - LastTime;
        LastTime = currentTime;

        ctx.fillRect(0,0,CubeWidth,CubeHeight);

        let angle = DeltaTime * 0.001 * Speed.x * Math.PI * 2;
        for (let cubeVertice of Vertices){
            let dx = cubeVertice.x - CubeX;
            let dy = cubeVertice.y - CubeY;
            let nx = dx * Math.cos(angle) - dy * Math.sin(angle);
            let ny = dx * Math.sin(angle) + dy * Math.cos(angle);
            cubeVertice.x = nx + CubeX;
            cubeVertice.y = ny + CubeY;
        }

        angle = DeltaTime * 0.001 * Speed.y * Math.PI * 2;
        for (let cubeVertice of Vertices){
            let dy = cubeVertice.y - CubeY;
            let dz = cubeVertice.z - CubeZ;
            let ny = dy * Math.cos(angle) - dz * Math.sin(angle);
            let nz = dy * Math.sin(angle) + dz * Math.cos(angle);
            cubeVertice.y = ny + CubeY;
            cubeVertice.z = nz + CubeZ;
        }

        angle = DeltaTime * 0.001 * Speed.z * Math.PI * 2;
        for (let cubeVertice of Vertices){
            let dx = cubeVertice.x - CubeX;
            let dz = cubeVertice.z - CubeZ;
            let nx = dx * Math.cos(angle) - dz * Math.sin(angle);
            let nz = dx * Math.sin(angle) + dz * Math.cos(angle);
            cubeVertice.x = nx + CubeX;
            cubeVertice.z = nz + CubeZ;
        }
        
        for(let edge of Edges){
            ctx.beginPath();
            ctx.moveTo(Vertices[edge[0]].x,Vertices[edge[0]].y);
            ctx.lineTo(Vertices[edge[1]].x,Vertices[edge[1]].y);
            ctx.stroke();
        }
    }
    requestAnimationFrame(loop);
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

      CubeY = CubeHeight/2;
      CubeX = CubeWidth/2;
      CubeZ = 0;
      CubeSize = CubeWidth / 6;

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
        [0,1],[1,2],[2,3],[3,0],
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
        <div style={GetRotatingCubeDivStyle()}>
            <canvas style={GetRotatingCubeStyle()} ref={canvas} />
        </div>
    );
}

export default RotatingCube;