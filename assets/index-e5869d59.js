import{y as l,z as u}from"./index-186e0fed.js";const f=l("layout",{state:()=>({isFold:!1,refresh:!1,isMoveTop:!1}),actions:{changeRefresh(o){this.refresh=o}}}),m=f,p=m(u);function d(o=document.documentElement,c=300,t=0){const e=o;if(!e)return;const r=(e.scrollTop-t)/2;let s=0,n=performance.now();function a(i){if(s+=Math.PI/(c/(i-n)),s>=Math.PI){e.scrollTop=t;return}e.scrollTop=r+t+r*Math.cos(s),n=i,window.requestAnimationFrame(a)}window.requestAnimationFrame(a)}function M(){p.isMoveTop=!0}export{d as s,M as t,m as u};
