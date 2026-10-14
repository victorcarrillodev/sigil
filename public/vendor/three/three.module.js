import{Matrix3 as _z,Vector2 as IJ,Color as ez,Vector3 as hz,mergeUniforms as XJ,CubeUVReflectionMapping as AQ,Mesh as fJ,BoxGeometry as sQ,ShaderMaterial as TJ,BackSide as EJ,cloneUniforms as pQ,Matrix4 as aJ,ColorManagement as JJ,SRGBTransfer as iz,PlaneGeometry as k1,FrontSide as BQ,getUnlitUniformColorSpace as I1,IntType as H1,warn as mz,HalfFloatType as hJ,UnsignedByteType as wJ,FloatType as bJ,RGBAFormat as PJ,Plane as K2,CubeReflectionMapping as GQ,CubeRefractionMapping as tJ,BufferGeometry as OQ,OrthographicCamera as E1,PerspectiveCamera as XQ,NoToneMapping as CJ,MeshBasicMaterial as W2,NoBlending as vJ,WebGLRenderTarget as OJ,BufferAttribute as uQ,LinearSRGBColorSpace as A1,LinearFilter as HJ,CubeTexture as O1,LinearMipmapLinearFilter as oJ,CubeCamera as q2,EquirectangularReflectionMapping as wQ,EquirectangularRefractionMapping as CQ,warnOnce as B2,Uint32BufferAttribute as G2,Uint16BufferAttribute as N2,error as rz,DataArrayTexture as F1,Vector4 as kJ,Float32BufferAttribute as G0,RawShaderMaterial as D2,CustomToneMapping as M1,NeutralToneMapping as L1,AgXToneMapping as y1,ACESFilmicToneMapping as w1,CineonToneMapping as C1,ReinhardToneMapping as S1,LinearToneMapping as R1,Data3DTexture as Z2,GreaterEqualCompare as iQ,LessEqualCompare as aQ,DepthTexture as HQ,Texture as U2,GLSL3 as N0,VSMShadowMap as KQ,PCFShadowMap as kQ,AddOperation as V2,MixOperation as Y2,MultiplyOperation as X2,LinearTransfer as P1,UniformsUtils as k2,DoubleSide as RJ,NormalBlending as IQ,TangentSpaceNormalMap as D0,ObjectSpaceNormalMap as I2,Layers as H2,RGFormat as rJ,RG11_EAC_Format as gQ,RED_GREEN_RGTC2_Format as lQ,MeshDepthMaterial as E2,MeshDistanceMaterial as A2,PCFSoftShadowMap as O2,DepthFormat as eJ,NearestFilter as uJ,CubeDepthTexture as F2,UnsignedIntType as gJ,Frustum as v1,LessEqualDepth as Z0,ReverseSubtractEquation as M2,SubtractEquation as L2,AddEquation as JQ,OneMinusConstantAlphaFactor as y2,ConstantAlphaFactor as w2,OneMinusConstantColorFactor as C2,ConstantColorFactor as S2,OneMinusDstAlphaFactor as R2,OneMinusDstColorFactor as P2,OneMinusSrcAlphaFactor as v2,OneMinusSrcColorFactor as f2,DstAlphaFactor as T2,DstColorFactor as h2,SrcAlphaSaturateFactor as j2,SrcAlphaFactor as x2,SrcColorFactor as _2,OneFactor as b2,ZeroFactor as d2,NotEqualDepth as p2,GreaterDepth as u2,GreaterEqualDepth as g2,EqualDepth as l2,LessDepth as m2,AlwaysDepth as c2,NeverDepth as n2,CullFaceNone as o2,CullFaceBack as U0,CullFaceFront as s2,CustomBlending as i2,MultiplyBlending as V0,SubtractiveBlending as Y0,AdditiveBlending as X0,ReversedDepthFuncs as a2,MinEquation as t2,MaxEquation as r2,MirroredRepeatWrapping as e2,ClampToEdgeWrapping as mQ,RepeatWrapping as z5,LinearMipmapNearestFilter as SQ,NearestMipmapLinearFilter as UQ,NearestMipmapNearestFilter as J5,NotEqualCompare as Q5,GreaterCompare as $5,EqualCompare as K5,LessCompare as W5,AlwaysCompare as q5,NeverCompare as B5,NoColorSpace as nJ,DepthStencilFormat as sJ,getByteLength as k0,UnsignedInt248Type as NQ,UnsignedShortType as EQ,createElementNS as G5,UnsignedShort4444Type as f1,UnsignedShort5551Type as T1,UnsignedInt5999Type as N5,UnsignedInt101111Type as D5,ByteType as Z5,ShortType as U5,AlphaFormat as V5,RGBFormat as Y5,RedFormat as X5,RedIntegerFormat as h1,RGIntegerFormat as j1,RGBAIntegerFormat as x1,RGB_S3TC_DXT1_Format as RQ,RGBA_S3TC_DXT1_Format as PQ,RGBA_S3TC_DXT3_Format as vQ,RGBA_S3TC_DXT5_Format as fQ,RGB_PVRTC_4BPPV1_Format as I0,RGB_PVRTC_2BPPV1_Format as H0,RGBA_PVRTC_4BPPV1_Format as E0,RGBA_PVRTC_2BPPV1_Format as A0,RGB_ETC1_Format as O0,RGB_ETC2_Format as F0,RGBA_ETC2_EAC_Format as M0,R11_EAC_Format as L0,SIGNED_R11_EAC_Format as y0,SIGNED_RG11_EAC_Format as w0,RGBA_ASTC_4x4_Format as C0,RGBA_ASTC_5x4_Format as S0,RGBA_ASTC_5x5_Format as R0,RGBA_ASTC_6x5_Format as P0,RGBA_ASTC_6x6_Format as v0,RGBA_ASTC_8x5_Format as f0,RGBA_ASTC_8x6_Format as T0,RGBA_ASTC_8x8_Format as h0,RGBA_ASTC_10x5_Format as j0,RGBA_ASTC_10x6_Format as x0,RGBA_ASTC_10x8_Format as _0,RGBA_ASTC_10x10_Format as b0,RGBA_ASTC_12x10_Format as d0,RGBA_ASTC_12x12_Format as p0,RGBA_BPTC_Format as u0,RGB_BPTC_SIGNED_Format as g0,RGB_BPTC_UNSIGNED_Format as l0,RED_RGTC1_Format as m0,SIGNED_RED_RGTC1_Format as c0,SIGNED_RED_GREEN_RGTC2_Format as n0,ExternalTexture as _1,EventDispatcher as k5,ArrayCamera as I5,WebXRController as TQ,RAD2DEG as H5,DataTexture as E5,createCanvasElement as A5,SRGBColorSpace as O5,REVISION as F5,log as o0,WebGLCoordinateSystem as s0,probeAsync as M5}from"./three.core.js";import{AdditiveAnimationBlendMode as I$,AlwaysStencilFunc as H$,AmbientLight as E$,AnimationAction as A$,AnimationClip as O$,AnimationLoader as F$,AnimationMixer as M$,AnimationObjectGroup as L$,AnimationUtils as y$,ArcCurve as w$,ArrowHelper as C$,AttachedBindMode as S$,Audio as R$,AudioAnalyser as P$,AudioContext as v$,AudioListener as f$,AudioLoader as T$,AxesHelper as h$,BasicDepthPacking as j$,BasicShadowMap as x$,BatchedMesh as _$,BezierInterpolant as b$,Bone as d$,BooleanKeyframeTrack as p$,Box2 as u$,Box3 as g$,Box3Helper as l$,BoxHelper as m$,BufferGeometryLoader as c$,Cache as n$,Camera as o$,CameraHelper as s$,CanvasTexture as i$,CapsuleGeometry as a$,CatmullRomCurve3 as t$,CircleGeometry as r$,Clock as e$,ColorKeyframeTrack as zK,Compatibility as JK,CompressedArrayTexture as QK,CompressedCubeTexture as $K,CompressedTexture as KK,CompressedTextureLoader as WK,ConeGeometry as qK,Controls as BK,CubeTextureLoader as GK,CubicBezierCurve as NK,CubicBezierCurve3 as DK,CubicInterpolant as ZK,CullFaceFrontBack as UK,Curve as VK,CurvePath as YK,CylinderGeometry as XK,Cylindrical as kK,DataTextureLoader as IK,DataUtils as HK,DecrementStencilOp as EK,DecrementWrapStencilOp as AK,DefaultLoadingManager as OK,DetachedBindMode as FK,DirectionalLight as MK,DirectionalLightHelper as LK,DiscreteInterpolant as yK,DodecahedronGeometry as wK,DynamicCopyUsage as CK,DynamicDrawUsage as SK,DynamicReadUsage as RK,EdgesGeometry as PK,EllipseCurve as vK,EqualStencilFunc as fK,Euler as TK,ExtrudeGeometry as hK,FileLoader as jK,Float16BufferAttribute as xK,Fog as _K,FogExp2 as bK,FramebufferTexture as dK,FrustumArray as pK,GLBufferAttribute as uK,GLSL1 as gK,GreaterEqualStencilFunc as lK,GreaterStencilFunc as mK,GridHelper as cK,Group as nK,HTMLTexture as oK,HemisphereLight as sK,HemisphereLightHelper as iK,IcosahedronGeometry as aK,ImageBitmapLoader as tK,ImageLoader as rK,ImageUtils as eK,IncrementStencilOp as zW,IncrementWrapStencilOp as JW,InstancedBufferAttribute as QW,InstancedBufferGeometry as $W,InstancedInterleavedBuffer as KW,InstancedMesh as WW,Int16BufferAttribute as qW,Int32BufferAttribute as BW,Int8BufferAttribute as GW,InterleavedBuffer as NW,InterleavedBufferAttribute as DW,Interpolant as ZW,InterpolateBezier as UW,InterpolateDiscrete as VW,InterpolateLinear as YW,InterpolateSmooth as XW,InterpolationSamplingMode as kW,InterpolationSamplingType as IW,InvertStencilOp as HW,KeepStencilOp as EW,KeyframeTrack as AW,LOD as OW,LatheGeometry as FW,LessEqualStencilFunc as MW,LessStencilFunc as LW,Light as yW,LightProbe as wW,LightShadow as CW,Line as SW,Line3 as RW,LineBasicMaterial as PW,LineCurve as vW,LineCurve3 as fW,LineDashedMaterial as TW,LineLoop as hW,LineSegments as jW,LinearInterpolant as xW,LinearMipMapLinearFilter as _W,LinearMipMapNearestFilter as bW,Loader as dW,LoaderUtils as pW,LoadingManager as uW,LoopOnce as gW,LoopPingPong as lW,LoopRepeat as mW,MOUSE as cW,Material as nW,MaterialBlending as oW,MaterialLoader as sW,MathUtils as iW,Matrix2 as aW,MeshLambertMaterial as tW,MeshMatcapMaterial as rW,MeshNormalMaterial as eW,MeshPhongMaterial as z3,MeshPhysicalMaterial as J3,MeshStandardMaterial as Q3,MeshToonMaterial as $3,NearestMipMapLinearFilter as K3,NearestMipMapNearestFilter as W3,NeverStencilFunc as q3,NoNormalPacking as B3,NormalAnimationBlendMode as G3,NormalGAPacking as N3,NormalRGPacking as D3,NotEqualStencilFunc as Z3,NumberKeyframeTrack as U3,Object3D as V3,ObjectLoader as Y3,OctahedronGeometry as X3,Path as k3,PlaneHelper as I3,PointLight as H3,PointLightHelper as E3,Points as A3,PointsMaterial as O3,PolarGridHelper as F3,PolyhedronGeometry as M3,PositionalAudio as L3,PropertyBinding as y3,PropertyMixer as w3,QuadraticBezierCurve as C3,QuadraticBezierCurve3 as S3,Quaternion as R3,QuaternionKeyframeTrack as P3,QuaternionLinearInterpolant as v3,RGBADepthPacking as f3,RGBDepthPacking as T3,RGBIntegerFormat as h3,RGDepthPacking as j3,Ray as x3,Raycaster as _3,RectAreaLight as b3,RenderObjectRefreshType as d3,RenderTarget as p3,RenderTarget3D as u3,ReplaceStencilOp as g3,RingGeometry as l3,Scene as m3,ShadowMaterial as c3,Shape as n3,ShapeGeometry as o3,ShapePath as s3,ShapeUtils as i3,Skeleton as a3,SkeletonHelper as t3,SkinnedMesh as r3,Source as e3,Sphere as zq,SphereGeometry as Jq,Spherical as Qq,SphericalHarmonics3 as $q,SplineCurve as Kq,SpotLight as Wq,SpotLightHelper as qq,Sprite as Bq,SpriteMaterial as Gq,StaticCopyUsage as Nq,StaticDrawUsage as Dq,StaticReadUsage as Zq,StereoCamera as Uq,StreamCopyUsage as Vq,StreamDrawUsage as Yq,StreamReadUsage as Xq,StringKeyframeTrack as kq,TOUCH as Iq,TetrahedronGeometry as Hq,TextureLoader as Eq,TextureSource as Aq,TextureUtils as Oq,Timer as Fq,TimestampQuery as Mq,TorusGeometry as Lq,TorusKnotGeometry as yq,Triangle as wq,TriangleFanDrawMode as Cq,TriangleStripDrawMode as Sq,TrianglesDrawMode as Rq,TubeGeometry as Pq,UVMapping as vq,Uint8BufferAttribute as fq,Uint8ClampedBufferAttribute as Tq,Uniform as hq,UniformsGroup as jq,VectorKeyframeTrack as xq,VideoFrameTexture as _q,VideoTexture as bq,WebGL3DRenderTarget as dq,WebGLArrayRenderTarget as pq,WebGPUCoordinateSystem as uq,WireframeGeometry as gq,WrapAroundEnding as lq,ZeroCurvatureEnding as mq,ZeroSlopeEnding as cq,ZeroStencilOp as nq,getConsoleFunction as oq,setConsoleFunction as sq}from"./three.core.js";function b1(){let z=null,Q=!1,J=null,$=null;function D(G,U){$=z.requestAnimationFrame(D),J(G,U)}return{start:function(){if(Q===!0)return;if(J===null)return;if(z===null)return;$=z.requestAnimationFrame(D),Q=!0},stop:function(){if(z!==null)z.cancelAnimationFrame($);Q=!1},setAnimationLoop:function(G){J=G},setContext:function(G){z=G}}}function L5(z){let Q=new WeakMap;function J(k,x){let{array:F,usage:j}=k,h=F.byteLength,Y=z.createBuffer();z.bindBuffer(x,Y),z.bufferData(x,F,j),k.onUploadCallback();let M;if(F instanceof Float32Array)M=z.FLOAT;else if(typeof Float16Array<"u"&&F instanceof Float16Array)M=z.HALF_FLOAT;else if(F instanceof Uint16Array)if(k.isFloat16BufferAttribute)M=z.HALF_FLOAT;else M=z.UNSIGNED_SHORT;else if(F instanceof Int16Array)M=z.SHORT;else if(F instanceof Uint32Array)M=z.UNSIGNED_INT;else if(F instanceof Int32Array)M=z.INT;else if(F instanceof Int8Array)M=z.BYTE;else if(F instanceof Uint8Array)M=z.UNSIGNED_BYTE;else if(F instanceof Uint8ClampedArray)M=z.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+F);return{buffer:Y,type:M,bytesPerElement:F.BYTES_PER_ELEMENT,version:k.version,size:h}}function $(k,x,F){let{array:j,updateRanges:h}=x;if(z.bindBuffer(F,k),h.length===0)z.bufferSubData(F,0,j);else{h.sort((M,S)=>M.start-S.start);let Y=0;for(let M=1;M<h.length;M++){let S=h[Y],g=h[M];if(g.start<=S.start+S.count+1)S.count=Math.max(S.count,g.start+g.count-S.start);else++Y,h[Y]=g}h.length=Y+1;for(let M=0,S=h.length;M<S;M++){let g=h[M];z.bufferSubData(F,g.start*j.BYTES_PER_ELEMENT,j,g.start,g.count)}x.clearUpdateRanges()}x.onUploadCallback()}function D(k){if(k.isInterleavedBufferAttribute)k=k.data;return Q.get(k)}function G(k){if(k.isInterleavedBufferAttribute)k=k.data;let x=Q.get(k);if(x)z.deleteBuffer(x.buffer),Q.delete(k)}function U(k,x){if(k.isInterleavedBufferAttribute)k=k.data;if(k.isGLBufferAttribute){let j=Q.get(k);if(!j||j.version<k.version)Q.set(k,{buffer:k.buffer,type:k.type,bytesPerElement:k.elementSize,version:k.version});return}let F=Q.get(k);if(F===void 0)Q.set(k,J(k,x));else if(F.version<k.version){if(F.size!==k.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(F.buffer,k,x),F.version=k.version}}return{get:D,remove:G,update:U}}var y5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T5=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,h5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,s5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,t5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z6=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J6="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q6=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$6=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K6=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W6=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q6=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B6=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G6=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N6=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D6=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z6=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U6=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V6=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y6=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X6=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k6=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,I6=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,H6=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E6=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A6=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O6=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F6=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M6=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L6=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y6=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w6=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C6=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,S6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f6=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T6=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h6=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j6=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x6=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_6=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b6=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d6=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p6=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u6=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g6=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l6=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m6=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o6=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s6=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i6=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a6=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t6=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r6=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e6=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z7=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,J7=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q7=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$7=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K7=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W7=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q7=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B7=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,G7=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N7=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D7=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z7=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U7=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V7=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y7=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X7=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k7=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I7=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H7=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E7=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A7=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L7=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,y7=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w7=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C7=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S7=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R7=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P7=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v7=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f7=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T7=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h7=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,j7=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x7=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_7=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b7=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d7=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p7=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u7=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g7=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l7=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m7=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o7=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s7=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i7=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a7=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t7=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r7=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e7=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J8=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q8=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$8=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K8=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pz={alphahash_fragment:y5,alphahash_pars_fragment:w5,alphamap_fragment:C5,alphamap_pars_fragment:S5,alphatest_fragment:R5,alphatest_pars_fragment:P5,aomap_fragment:v5,aomap_pars_fragment:f5,batching_pars_vertex:T5,batching_vertex:h5,begin_vertex:j5,beginnormal_vertex:x5,bsdfs:_5,iridescence_fragment:b5,bumpmap_pars_fragment:d5,clipping_planes_fragment:p5,clipping_planes_pars_fragment:u5,clipping_planes_pars_vertex:g5,clipping_planes_vertex:l5,color_fragment:m5,color_pars_fragment:c5,color_pars_vertex:n5,color_vertex:o5,common:s5,cube_uv_reflection_fragment:i5,defaultnormal_vertex:a5,displacementmap_pars_vertex:t5,displacementmap_vertex:r5,emissivemap_fragment:e5,emissivemap_pars_fragment:z6,colorspace_fragment:J6,colorspace_pars_fragment:Q6,envmap_fragment:$6,envmap_common_pars_fragment:K6,envmap_pars_fragment:W6,envmap_pars_vertex:q6,envmap_physical_pars_fragment:I6,envmap_vertex:B6,fog_vertex:G6,fog_pars_vertex:N6,fog_fragment:D6,fog_pars_fragment:Z6,gradientmap_pars_fragment:U6,lightmap_pars_fragment:V6,lights_lambert_fragment:Y6,lights_lambert_pars_fragment:X6,lights_pars_begin:k6,lights_toon_fragment:H6,lights_toon_pars_fragment:E6,lights_phong_fragment:A6,lights_phong_pars_fragment:O6,lights_physical_fragment:F6,lights_physical_pars_fragment:M6,lights_fragment_begin:L6,lights_fragment_maps:y6,lights_fragment_end:w6,lightprobes_pars_fragment:C6,logdepthbuf_fragment:S6,logdepthbuf_pars_fragment:R6,logdepthbuf_pars_vertex:P6,logdepthbuf_vertex:v6,map_fragment:f6,map_pars_fragment:T6,map_particle_fragment:h6,map_particle_pars_fragment:j6,metalnessmap_fragment:x6,metalnessmap_pars_fragment:_6,morphinstance_vertex:b6,morphcolor_vertex:d6,morphnormal_vertex:p6,morphtarget_pars_vertex:u6,morphtarget_vertex:g6,normal_fragment_begin:l6,normal_fragment_maps:m6,normal_pars_fragment:c6,normal_pars_vertex:n6,normal_vertex:o6,normalmap_pars_fragment:s6,clearcoat_normal_fragment_begin:i6,clearcoat_normal_fragment_maps:a6,clearcoat_pars_fragment:t6,iridescence_pars_fragment:r6,opaque_fragment:e6,packing:z7,premultiplied_alpha_fragment:J7,project_vertex:Q7,dithering_fragment:$7,dithering_pars_fragment:K7,roughnessmap_fragment:W7,roughnessmap_pars_fragment:q7,shadowmap_pars_fragment:B7,shadowmap_pars_vertex:G7,shadowmap_vertex:N7,shadowmask_pars_fragment:D7,skinbase_vertex:Z7,skinning_pars_vertex:U7,skinning_vertex:V7,skinnormal_vertex:Y7,specularmap_fragment:X7,specularmap_pars_fragment:k7,tonemapping_fragment:I7,tonemapping_pars_fragment:H7,transmission_fragment:E7,transmission_pars_fragment:A7,uv_pars_fragment:O7,uv_pars_vertex:F7,uv_vertex:M7,worldpos_vertex:L7,background_vert:y7,background_frag:w7,backgroundCube_vert:C7,backgroundCube_frag:S7,cube_vert:R7,cube_frag:P7,depth_vert:v7,depth_frag:f7,distance_vert:T7,distance_frag:h7,equirect_vert:j7,equirect_frag:x7,linedashed_vert:_7,linedashed_frag:b7,meshbasic_vert:d7,meshbasic_frag:p7,meshlambert_vert:u7,meshlambert_frag:g7,meshmatcap_vert:l7,meshmatcap_frag:m7,meshnormal_vert:c7,meshnormal_frag:n7,meshphong_vert:o7,meshphong_frag:s7,meshphysical_vert:i7,meshphysical_frag:a7,meshtoon_vert:t7,meshtoon_frag:r7,points_vert:e7,points_frag:z8,shadow_vert:J8,shadow_frag:Q8,sprite_vert:$8,sprite_frag:K8},Gz={common:{diffuse:{value:new ez(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _z},alphaMap:{value:null},alphaMapTransform:{value:new _z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _z}},envmap:{envMap:{value:null},envMapRotation:{value:new _z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _z},normalScale:{value:new IJ(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new ez(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new hz},probesMax:{value:new hz},probesResolution:{value:new hz}},points:{diffuse:{value:new ez(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _z},alphaTest:{value:0},uvTransform:{value:new _z}},sprite:{diffuse:{value:new ez(16777215)},opacity:{value:1},center:{value:new IJ(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _z},alphaMap:{value:null},alphaMapTransform:{value:new _z},alphaTest:{value:0}}},yJ={basic:{uniforms:XJ([Gz.common,Gz.specularmap,Gz.envmap,Gz.aomap,Gz.lightmap,Gz.fog]),vertexShader:Pz.meshbasic_vert,fragmentShader:Pz.meshbasic_frag},lambert:{uniforms:XJ([Gz.common,Gz.specularmap,Gz.envmap,Gz.aomap,Gz.lightmap,Gz.emissivemap,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,Gz.fog,Gz.lights,{emissive:{value:new ez(0)},envMapIntensity:{value:1}}]),vertexShader:Pz.meshlambert_vert,fragmentShader:Pz.meshlambert_frag},phong:{uniforms:XJ([Gz.common,Gz.specularmap,Gz.envmap,Gz.aomap,Gz.lightmap,Gz.emissivemap,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,Gz.fog,Gz.lights,{emissive:{value:new ez(0)},specular:{value:new ez(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pz.meshphong_vert,fragmentShader:Pz.meshphong_frag},standard:{uniforms:XJ([Gz.common,Gz.envmap,Gz.aomap,Gz.lightmap,Gz.emissivemap,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,Gz.roughnessmap,Gz.metalnessmap,Gz.fog,Gz.lights,{emissive:{value:new ez(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pz.meshphysical_vert,fragmentShader:Pz.meshphysical_frag},toon:{uniforms:XJ([Gz.common,Gz.aomap,Gz.lightmap,Gz.emissivemap,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,Gz.gradientmap,Gz.fog,Gz.lights,{emissive:{value:new ez(0)}}]),vertexShader:Pz.meshtoon_vert,fragmentShader:Pz.meshtoon_frag},matcap:{uniforms:XJ([Gz.common,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,Gz.fog,{matcap:{value:null}}]),vertexShader:Pz.meshmatcap_vert,fragmentShader:Pz.meshmatcap_frag},points:{uniforms:XJ([Gz.points,Gz.fog]),vertexShader:Pz.points_vert,fragmentShader:Pz.points_frag},dashed:{uniforms:XJ([Gz.common,Gz.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pz.linedashed_vert,fragmentShader:Pz.linedashed_frag},depth:{uniforms:XJ([Gz.common,Gz.displacementmap]),vertexShader:Pz.depth_vert,fragmentShader:Pz.depth_frag},normal:{uniforms:XJ([Gz.common,Gz.bumpmap,Gz.normalmap,Gz.displacementmap,{opacity:{value:1}}]),vertexShader:Pz.meshnormal_vert,fragmentShader:Pz.meshnormal_frag},sprite:{uniforms:XJ([Gz.sprite,Gz.fog]),vertexShader:Pz.sprite_vert,fragmentShader:Pz.sprite_frag},background:{uniforms:{uvTransform:{value:new _z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pz.background_vert,fragmentShader:Pz.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _z}},vertexShader:Pz.backgroundCube_vert,fragmentShader:Pz.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pz.cube_vert,fragmentShader:Pz.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pz.equirect_vert,fragmentShader:Pz.equirect_frag},distance:{uniforms:XJ([Gz.common,Gz.displacementmap,{referencePosition:{value:new hz},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Pz.distance_vert,fragmentShader:Pz.distance_frag},shadow:{uniforms:XJ([Gz.lights,Gz.fog,{color:{value:new ez(0)},opacity:{value:1}}]),vertexShader:Pz.shadow_vert,fragmentShader:Pz.shadow_frag}};yJ.physical={uniforms:XJ([yJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _z},clearcoatNormalScale:{value:new IJ(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _z},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _z},sheen:{value:0},sheenColor:{value:new ez(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _z},transmissionSamplerSize:{value:new IJ},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _z},attenuationDistance:{value:0},attenuationColor:{value:new ez(0)},specularColor:{value:new ez(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _z},anisotropyVector:{value:new IJ},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _z}}]),vertexShader:Pz.meshphysical_vert,fragmentShader:Pz.meshphysical_frag};var VQ={r:0,b:0,g:0},W8=new aJ,d1=new _z;d1.set(-1,0,0,0,1,0,0,0,1);function q8(z,Q,J,$,D,G){let U=new ez(0),k=D===!0?0:1,x,F,j=null,h=0,Y=null;function M(P){let c=P.isScene===!0?P.background:null;if(c&&c.isTexture){let X=P.backgroundBlurriness>0;c=Q.get(c,X)}return c}function S(P){let c=!1,X=M(P);if(X===null)Z(U,k);else if(X&&X.isColor)Z(X,1),c=!0;let I=z.xr.getEnvironmentBlendMode();if(I==="additive")J.buffers.color.setClear(0,0,0,1,G);else if(I==="alpha-blend")J.buffers.color.setClear(0,0,0,0,G);if(z.autoClear||c)J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),z.clear(z.autoClearColor,z.autoClearDepth,z.autoClearStencil)}function g(P,c){let X=M(c);if(X&&(X.isCubeTexture||X.mapping===AQ)){if(F===void 0)F=new fJ(new sQ(1,1,1),new TJ({name:"BackgroundCubeMaterial",uniforms:pQ(yJ.backgroundCube.uniforms),vertexShader:yJ.backgroundCube.vertexShader,fragmentShader:yJ.backgroundCube.fragmentShader,side:EJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),F.geometry.deleteAttribute("normal"),F.geometry.deleteAttribute("uv"),F.onBeforeRender=function(I,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(F.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),$.update(F);if(F.material.uniforms.envMap.value=X,F.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,F.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,F.material.uniforms.backgroundRotation.value.setFromMatrix4(W8.makeRotationFromEuler(c.backgroundRotation)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1)F.material.uniforms.backgroundRotation.value.premultiply(d1);if(F.material.toneMapped=JJ.getTransfer(X.colorSpace)!==iz,j!==X||h!==X.version||Y!==z.toneMapping)F.material.needsUpdate=!0,j=X,h=X.version,Y=z.toneMapping;F.layers.enableAll(),P.unshift(F,F.geometry,F.material,0,0,null)}else if(X&&X.isTexture){if(x===void 0)x=new fJ(new k1(2,2),new TJ({name:"BackgroundMaterial",uniforms:pQ(yJ.background.uniforms),vertexShader:yJ.background.vertexShader,fragmentShader:yJ.background.fragmentShader,side:BQ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),$.update(x);if(x.material.uniforms.t2D.value=X,x.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,x.material.toneMapped=JJ.getTransfer(X.colorSpace)!==iz,X.matrixAutoUpdate===!0)X.updateMatrix();if(x.material.uniforms.uvTransform.value.copy(X.matrix),j!==X||h!==X.version||Y!==z.toneMapping)x.material.needsUpdate=!0,j=X,h=X.version,Y=z.toneMapping;x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)}}function Z(P,c){P.getRGB(VQ,I1(z)),J.buffers.color.setClear(VQ.r,VQ.g,VQ.b,c,G)}function q(){if(F!==void 0)F.geometry.dispose(),F.material.dispose(),F=void 0;if(x!==void 0)x.geometry.dispose(),x.material.dispose(),x=void 0}return{getClearColor:function(){return U},setClearColor:function(P,c=1){U.set(P),k=c,Z(U,k)},getClearAlpha:function(){return k},setClearAlpha:function(P){k=P,Z(U,k)},render:S,addToRenderList:g,dispose:q}}function B8(z,Q){let J=z.getParameter(z.MAX_VERTEX_ATTRIBS),$={},D=Y(null),G=D,U=!1;function k(v,_,zz,C,l){let a=!1,d=h(v,C,zz,_);if(G!==d)G=d,F(G.object);if(a=M(v,C,zz,l),a)S(v,C,zz,l);if(l!==null)Q.update(l,z.ELEMENT_ARRAY_BUFFER);if(a||U){if(U=!1,X(v,_,zz,C),l!==null)z.bindBuffer(z.ELEMENT_ARRAY_BUFFER,Q.get(l).buffer)}}function x(){return z.createVertexArray()}function F(v){return z.bindVertexArray(v)}function j(v){return z.deleteVertexArray(v)}function h(v,_,zz,C){let l=C.wireframe===!0,a=$[_.id];if(a===void 0)a={},$[_.id]=a;let d=v.isInstancedMesh===!0?v.id:0,Vz=a[d];if(Vz===void 0)Vz={},a[d]=Vz;let n=Vz[zz.id];if(n===void 0)n={},Vz[zz.id]=n;let t=n[l];if(t===void 0)t=Y(x()),n[l]=t;return t}function Y(v){let _=[],zz=[],C=[];for(let l=0;l<J;l++)_[l]=0,zz[l]=0,C[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:zz,attributeDivisors:C,object:v,attributes:{},index:null}}function M(v,_,zz,C){let l=G.attributes,a=_.attributes,d=0,Vz=zz.getAttributes();for(let n in Vz)if(Vz[n].location>=0){let e=l[n],Sz=a[n];if(Sz===void 0){if(n==="instanceMatrix"&&v.instanceMatrix)Sz=v.instanceMatrix;if(n==="instanceColor"&&v.instanceColor)Sz=v.instanceColor}if(e===void 0)return!0;if(e.attribute!==Sz)return!0;if(Sz&&e.data!==Sz.data)return!0;d++}if(G.attributesNum!==d)return!0;if(G.index!==C)return!0;return!1}function S(v,_,zz,C){let l={},a=_.attributes,d=0,Vz=zz.getAttributes();for(let n in Vz)if(Vz[n].location>=0){let e=a[n];if(e===void 0){if(n==="instanceMatrix"&&v.instanceMatrix)e=v.instanceMatrix;if(n==="instanceColor"&&v.instanceColor)e=v.instanceColor}let Sz={};if(Sz.attribute=e,e&&e.data)Sz.data=e.data;l[n]=Sz,d++}G.attributes=l,G.attributesNum=d,G.index=C}function g(){let v=G.newAttributes;for(let _=0,zz=v.length;_<zz;_++)v[_]=0}function Z(v){q(v,0)}function q(v,_){let{newAttributes:zz,enabledAttributes:C,attributeDivisors:l}=G;if(zz[v]=1,C[v]===0)z.enableVertexAttribArray(v),C[v]=1;if(l[v]!==_)z.vertexAttribDivisor(v,_),l[v]=_}function P(){let{newAttributes:v,enabledAttributes:_}=G;for(let zz=0,C=_.length;zz<C;zz++)if(_[zz]!==v[zz])z.disableVertexAttribArray(zz),_[zz]=0}function c(v,_,zz,C,l,a,d){if(d===!0)z.vertexAttribIPointer(v,_,zz,l,a);else z.vertexAttribPointer(v,_,zz,C,l,a)}function X(v,_,zz,C){g();let l=C.attributes,a=zz.getAttributes(),d=_.defaultAttributeValues;for(let Vz in a){let n=a[Vz];if(n.location>=0){let t=l[Vz];if(t===void 0){if(Vz==="instanceMatrix"&&v.instanceMatrix)t=v.instanceMatrix;if(Vz==="instanceColor"&&v.instanceColor)t=v.instanceColor}if(t!==void 0){let{normalized:e,itemSize:Sz}=t,Lz=Q.get(t);if(Lz===void 0)continue;let{buffer:$J,type:Tz,bytesPerElement:u}=Lz,Qz=Tz===z.INT||Tz===z.UNSIGNED_INT||t.gpuType===H1;if(t.isInterleavedBufferAttribute){let $z=t.data,yz=$z.stride,wz=t.offset;if($z.isInstancedInterleavedBuffer){for(let Mz=0;Mz<n.locationSize;Mz++)q(n.location+Mz,$z.meshPerAttribute);if(v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=$z.meshPerAttribute*$z.count}else for(let Mz=0;Mz<n.locationSize;Mz++)Z(n.location+Mz);z.bindBuffer(z.ARRAY_BUFFER,$J);for(let Mz=0;Mz<n.locationSize;Mz++)c(n.location+Mz,Sz/n.locationSize,Tz,e,yz*u,(wz+Sz/n.locationSize*Mz)*u,Qz)}else{if(t.isInstancedBufferAttribute){for(let $z=0;$z<n.locationSize;$z++)q(n.location+$z,t.meshPerAttribute);if(v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=t.meshPerAttribute*t.count}else for(let $z=0;$z<n.locationSize;$z++)Z(n.location+$z);z.bindBuffer(z.ARRAY_BUFFER,$J);for(let $z=0;$z<n.locationSize;$z++)c(n.location+$z,Sz/n.locationSize,Tz,e,Sz*u,Sz/n.locationSize*$z*u,Qz)}}else if(d!==void 0){let e=d[Vz];if(e!==void 0)switch(e.length){case 2:z.vertexAttrib2fv(n.location,e);break;case 3:z.vertexAttrib3fv(n.location,e);break;case 4:z.vertexAttrib4fv(n.location,e);break;default:z.vertexAttrib1fv(n.location,e)}}}}P()}function I(){V();for(let v in $){let _=$[v];for(let zz in _){let C=_[zz];for(let l in C){let a=C[l];for(let d in a)j(a[d].object),delete a[d];delete C[l]}}delete $[v]}}function L(v){if($[v.id]===void 0)return;let _=$[v.id];for(let zz in _){let C=_[zz];for(let l in C){let a=C[l];for(let d in a)j(a[d].object),delete a[d];delete C[l]}}delete $[v.id]}function R(v){for(let _ in $){let zz=$[_];for(let C in zz){let l=zz[C];if(l[v.id]===void 0)continue;let a=l[v.id];for(let d in a)j(a[d].object),delete a[d];delete l[v.id]}}}function N(v){for(let _ in $){let zz=$[_],C=v.isInstancedMesh===!0?v.id:0,l=zz[C];if(l===void 0)continue;for(let a in l){let d=l[a];for(let Vz in d)j(d[Vz].object),delete d[Vz];delete l[a]}if(delete zz[C],Object.keys(zz).length===0)delete $[_]}}function V(){if(s(),U=!0,G===D)return;G=D,F(G.object)}function s(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:k,reset:V,resetDefaultState:s,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:N,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:Z,disableUnusedAttributes:P}}function G8(z,Q,J){let $;function D(x){$=x}function G(x,F){z.drawArrays($,x,F),J.update(F,$,1)}function U(x,F,j){if(j===0)return;z.drawArraysInstanced($,x,F,j),J.update(F,$,j)}function k(x,F,j){if(j===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,x,0,F,0,j);let Y=0;for(let M=0;M<j;M++)Y+=F[M];J.update(Y,$,1)}this.setMode=D,this.render=G,this.renderInstances=U,this.renderMultiDraw=k}function N8(z,Q,J,$){let D;function G(){if(D!==void 0)return D;if(Q.has("EXT_texture_filter_anisotropic")===!0){let R=Q.get("EXT_texture_filter_anisotropic");D=z.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else D=0;return D}function U(R){if(R!==PJ&&$.convert(R)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function k(R){let N=R===hJ&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(R!==wJ&&R!==bJ&&!N&&$.convert(R)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function x(R){if(R==="highp"){if(z.getShaderPrecisionFormat(z.VERTEX_SHADER,z.HIGH_FLOAT).precision>0&&z.getShaderPrecisionFormat(z.FRAGMENT_SHADER,z.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(z.getShaderPrecisionFormat(z.VERTEX_SHADER,z.MEDIUM_FLOAT).precision>0&&z.getShaderPrecisionFormat(z.FRAGMENT_SHADER,z.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let F=J.precision!==void 0?J.precision:"highp",j=x(F);if(j!==F)mz("WebGLRenderer:",F,"not supported, using",j,"instead."),F=j;let h=J.logarithmicDepthBuffer===!0,Y=J.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if(J.reversedDepthBuffer===!0&&Y===!1)mz("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=z.getParameter(z.MAX_TEXTURE_IMAGE_UNITS),S=z.getParameter(z.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=z.getParameter(z.MAX_TEXTURE_SIZE),Z=z.getParameter(z.MAX_CUBE_MAP_TEXTURE_SIZE),q=z.getParameter(z.MAX_VERTEX_ATTRIBS),P=z.getParameter(z.MAX_VERTEX_UNIFORM_VECTORS),c=z.getParameter(z.MAX_VARYING_VECTORS),X=z.getParameter(z.MAX_FRAGMENT_UNIFORM_VECTORS),I=z.getParameter(z.MAX_SAMPLES),L=z.getParameter(z.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:G,getMaxPrecision:x,textureFormatReadable:U,textureTypeReadable:k,precision:F,logarithmicDepthBuffer:h,reversedDepthBuffer:Y,maxTextures:M,maxVertexTextures:S,maxTextureSize:g,maxCubemapSize:Z,maxAttributes:q,maxVertexUniforms:P,maxVaryings:c,maxFragmentUniforms:X,maxSamples:I,samples:L}}function D8(z){let Q=this,J=null,$=0,D=!1,G=!1,U=new K2,k=new _z,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(h,Y){let M=h.length!==0||Y||$!==0||D;return D=Y,$=h.length,M},this.beginShadows=function(){G=!0,j(null)},this.endShadows=function(){G=!1},this.setGlobalState=function(h,Y){J=j(h,Y,0)},this.setState=function(h,Y,M){let{clippingPlanes:S,clipIntersection:g,clipShadows:Z}=h,q=z.get(h);if(!D||S===null||S.length===0||G&&!Z)if(G)j(null);else F();else{let P=G?0:$,c=P*4,X=q.clippingState||null;x.value=X,X=j(S,Y,c,M);for(let I=0;I!==c;++I)X[I]=J[I];q.clippingState=X,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=P}};function F(){if(x.value!==J)x.value=J,x.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function j(h,Y,M,S){let g=h!==null?h.length:0,Z=null;if(g!==0){if(Z=x.value,S!==!0||Z===null){let q=M+g*4,P=Y.matrixWorldInverse;if(k.getNormalMatrix(P),Z===null||Z.length<q)Z=new Float32Array(q);for(let c=0,X=M;c!==g;++c,X+=4)U.copy(h[c]).applyMatrix4(P,k),U.normal.toArray(Z,X),Z[X+3]=U.constant}x.value=Z,x.needsUpdate=!0}return Q.numPlanes=g,Q.numIntersection=0,Z}}var iJ=4,Z8=6,U8=20,V8=256,QQ=new E1,i0=new ez,hQ=null,jQ=0,xQ=0,_Q=!1,Y8=new hz,pJ=new hz;class cQ{constructor(z){this._renderer=z,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(z,Q=0,J=0.1,$=100,D={}){let{size:G=256,position:U=Y8}=D;hQ=this._renderer.getRenderTarget(),jQ=this._renderer.getActiveCubeFace(),xQ=this._renderer.getActiveMipmapLevel(),_Q=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(G);let k=this._allocateTargets();if(k.depthBuffer=!0,this._sceneToCubeUV(z,J,$,k,U),Q>0)this._blur(k,0,0,Q);return this._applyPMREM(k),this._cleanup(k),k}fromEquirectangular(z,Q=null){return this._fromTexture(z,Q)}fromCubemap(z,Q=null){return this._fromTexture(z,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(z){this._lodMax=Math.floor(Math.log2(z)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let z=0;z<this._lodMeshes.length;z++)this._lodMeshes[z].geometry.dispose()}_cleanup(z){this._renderer.setRenderTarget(hQ,jQ,xQ),this._renderer.xr.enabled=_Q,z.scissorTest=!1,cJ(z,0,0,z.width,z.height)}_fromTexture(z,Q){if(z.mapping===GQ||z.mapping===tJ)this._setSize(z.image.length===0?16:z.image[0].width||z.image[0].image.width);else this._setSize(z.image.width/4);hQ=this._renderer.getRenderTarget(),jQ=this._renderer.getActiveCubeFace(),xQ=this._renderer.getActiveMipmapLevel(),_Q=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let J=Q||this._allocateTargets();return this._textureToCubeUV(z,J),this._applyPMREM(J),this._cleanup(J),J}_allocateTargets(){let z=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,J={magFilter:HJ,minFilter:HJ,generateMipmaps:!1,type:hJ,format:PJ,colorSpace:A1,depthBuffer:!1},$=a0(z,Q,J);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==z||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=a0(z,Q,J);let{_lodMax:D}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X8(D)),this._blurMaterial=I8(D,z,Q),this._ggxMaterial=k8(D,z,Q)}return $}_compileMaterial(z){let Q=new fJ(new OQ,z);this._renderer.compile(Q,QQ)}_sceneToCubeUV(z,Q,J,$,D){let k=new XQ(90,1,Q,J),x=[1,-1,1,1,1,1],F=[1,1,1,-1,-1,-1],j=this._renderer,h=j.autoClear,Y=j.toneMapping;if(j.getClearColor(i0),j.toneMapping=CJ,j.autoClear=!1,j.state.buffers.depth.getReversed())j.setRenderTarget($),j.clearDepth(),j.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new fJ(new sQ,new W2({name:"PMREM.Background",side:EJ,depthWrite:!1,depthTest:!1}));let S=this._backgroundBox,g=S.material,Z=!1,q=z.background;if(q){if(q.isColor)g.color.copy(q),z.background=null,Z=!0}else g.color.copy(i0),Z=!0;for(let P=0;P<6;P++){let c=P%3;if(c===0)k.up.set(0,x[P],0),k.position.set(D.x,D.y,D.z),k.lookAt(D.x+F[P],D.y,D.z);else if(c===1)k.up.set(0,0,x[P]),k.position.set(D.x,D.y,D.z),k.lookAt(D.x,D.y+F[P],D.z);else k.up.set(0,x[P],0),k.position.set(D.x,D.y,D.z),k.lookAt(D.x,D.y,D.z+F[P]);let X=this._cubeSize;if(cJ($,c*X,P>2?X:0,X,X),j.setRenderTarget($),Z)j.render(S,k);j.render(z,k)}j.toneMapping=Y,j.autoClear=h,z.background=q}_textureToCubeUV(z,Q){let J=this._renderer,$=z.mapping===GQ||z.mapping===tJ;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=r0();this._cubemapMaterial.uniforms.flipEnvMap.value=z.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=t0();let D=$?this._cubemapMaterial:this._equirectMaterial,G=this._lodMeshes[0];G.material=D;let U=D.uniforms;U.envMap.value=z;let k=this._cubeSize;cJ(Q,0,0,3*k,2*k),J.setRenderTarget(Q),J.render(G,QQ)}_applyPMREM(z){let Q=this._renderer,J=Q.autoClear;Q.autoClear=!1;let $=this._lodMeshes.length;for(let D=1;D<$;D++)this._applyGGXFilter(z,D-1,D);Q.autoClear=J}_applyGGXFilter(z,Q,J){let $=this._renderer,D=this._pingPongRenderTarget,G=this._ggxMaterial,U=this._lodMeshes[J];U.material=G;let k=G.uniforms,x=J/(this._lodMeshes.length-1),F=Q/(this._lodMeshes.length-1),j=Math.sqrt(x*x-F*F),h=x*1.25,Y=j*h,{_lodMax:M}=this,S=this._sizeLods[J],g=3*S*(J>M-iJ?J-M+iJ:0),Z=4*(this._cubeSize-S);k.envMap.value=z.texture,k.roughness.value=Y,k.mipInt.value=M-Q,cJ(D,g,Z,3*S,2*S),$.setRenderTarget(D),$.render(U,QQ),k.envMap.value=D.texture,k.roughness.value=0,k.mipInt.value=M-J,cJ(z,g,Z,3*S,2*S),$.setRenderTarget(z),$.render(U,QQ)}_blur(z,Q,J,$){let D=this._pingPongRenderTarget,G=Math.min($,Math.PI)/Math.SQRT2;this._blurPass(z,D,Q,J,G),this._blurPass(D,z,J,J,G)}_blurPass(z,Q,J,$,D){let G=this._renderer,U=this._blurMaterial,k=this._lodMeshes[$];k.material=U;let x=U.uniforms;x.envMap.value=z.texture,x.sigma.value=D,x.mipInt.value=this._lodMax-J;let F=this._sizeLods[$],j=3*F*($>this._lodMax-iJ?$-this._lodMax+iJ:0),h=4*(this._cubeSize-F);cJ(Q,j,h,3*F,2*F),G.setRenderTarget(Q),G.render(k,QQ)}}function X8(z){let Q=[],J=[],$=z,D=z-iJ+1+Z8;for(let G=0;G<D;G++){let U=Math.pow(2,$);Q.push(U);let k=1/(U-2),x=-k,F=1+k,j=[x,x,F,x,F,F,x,x,F,F,x,F],h=6,Y=6,M=3,S=new Float32Array(M*Y*h),g=new Float32Array(M*Y*h);for(let q=0;q<h;q++){let P=q%3*2/3-1,c=q>2?0:-1,X=[P,c,0,P+0.6666666666666666,c,0,P+0.6666666666666666,c+1,0,P,c,0,P+0.6666666666666666,c+1,0,P,c+1,0];S.set(X,M*Y*q);for(let I=0;I<Y;I++){let L=j[I*2]*2-1,R=j[I*2+1]*2-1;if(q===0)pJ.set(1,R,L);else if(q===1)pJ.set(-L,1,-R);else if(q===2)pJ.set(-L,R,1);else if(q===3)pJ.set(-1,R,-L);else if(q===4)pJ.set(-L,-1,R);else pJ.set(L,R,-1);pJ.toArray(g,(q*Y+I)*M)}}let Z=new OQ;if(Z.setAttribute("position",new uQ(S,M)),Z.setAttribute("outputDirection",new uQ(g,M)),J.push(new fJ(Z,null)),$>iJ)$--}return{lodMeshes:J,sizeLods:Q}}function a0(z,Q,J){let $=new OJ(z,Q,J);return $.texture.mapping=AQ,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function cJ(z,Q,J,$,D){z.viewport.set(Q,J,$,D),z.scissor.set(Q,J,$,D)}function k8(z,Q,J){return new TJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/J,CUBEUV_MAX_MIP:`${z}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:FQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vJ,depthTest:!1,depthWrite:!1})}function I8(z,Q,J){return new TJ({name:"SphericalGaussianBlur",defines:{SAMPLES:U8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/J,CUBEUV_MAX_MIP:`${z}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:FQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vJ,depthTest:!1,depthWrite:!1})}function t0(){return new TJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:FQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vJ,depthTest:!1,depthWrite:!1})}function r0(){return new TJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:FQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vJ,depthTest:!1,depthWrite:!1})}function FQ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class tQ extends OJ{constructor(z=1,Q={}){super(z,z,Q);this.isWebGLCubeRenderTarget=!0;let J={width:z,height:z,depth:1},$=[J,J,J,J,J,J];this.texture=new O1($),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(z,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let J={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new sQ(5,5,5),D=new TJ({name:"CubemapFromEquirect",uniforms:pQ(J.uniforms),vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,side:EJ,blending:vJ});D.uniforms.tEquirect.value=Q;let G=new fJ($,D),U=Q.minFilter;if(Q.minFilter===oJ)Q.minFilter=HJ;return new q2(1,10,this).update(z,G),Q.minFilter=U,G.geometry.dispose(),G.material.dispose(),this}clear(z,Q=!0,J=!0,$=!0){let D=z.getRenderTarget();for(let G=0;G<6;G++)z.setRenderTarget(this,G),z.clear(Q,J,$);z.setRenderTarget(D)}}function H8(z){let Q=new WeakMap,J=new WeakMap,$=null;function D(Y,M=!1){if(Y===null||Y===void 0)return null;if(M)return U(Y);return G(Y)}function G(Y){if(Y&&Y.isTexture){let M=Y.mapping;if(M===wQ||M===CQ)if(Q.has(Y)){let S=Q.get(Y).texture;return k(S,Y.mapping)}else{let S=Y.image;if(S&&S.height>0){let g=new tQ(S.height);return g.fromEquirectangularTexture(z,Y),Q.set(Y,g),Y.addEventListener("dispose",F),k(g.texture,Y.mapping)}else return null}}return Y}function U(Y){if(Y&&Y.isTexture){let M=Y.mapping,S=M===wQ||M===CQ,g=M===GQ||M===tJ;if(S||g){let Z=J.get(Y),q=Z!==void 0?Z.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==q){if($===null)$=new cQ(z);return Z=S?$.fromEquirectangular(Y,Z):$.fromCubemap(Y,Z),Z.texture.pmremVersion=Y.pmremVersion,J.set(Y,Z),Z.texture}else if(Z!==void 0)return Z.texture;else{let P=Y.image;if(S&&P&&P.height>0||g&&P&&x(P)){if($===null)$=new cQ(z);return Z=S?$.fromEquirectangular(Y):$.fromCubemap(Y),Z.texture.pmremVersion=Y.pmremVersion,J.set(Y,Z),Y.addEventListener("dispose",j),Z.texture}else return null}}}return Y}function k(Y,M){if(M===wQ)Y.mapping=GQ;else if(M===CQ)Y.mapping=tJ;return Y}function x(Y){let M=0,S=6;for(let g=0;g<S;g++)if(Y[g]!==void 0)M++;return M===S}function F(Y){let M=Y.target;M.removeEventListener("dispose",F);let S=Q.get(M);if(S!==void 0)Q.delete(M),S.dispose()}function j(Y){let M=Y.target;M.removeEventListener("dispose",j);let S=J.get(M);if(S!==void 0)J.delete(M),S.dispose()}function h(){if(Q=new WeakMap,J=new WeakMap,$!==null)$.dispose(),$=null}return{get:D,dispose:h}}function E8(z){let Q={};function J($){if(Q[$]!==void 0)return Q[$];let D=z.getExtension($);return Q[$]=D,D}return{has:function($){return J($)!==null},init:function(){J("EXT_color_buffer_float"),J("WEBGL_clip_cull_distance"),J("OES_texture_float_linear"),J("EXT_color_buffer_half_float"),J("WEBGL_multisampled_render_to_texture"),J("WEBGL_render_shared_exponent")},get:function($){let D=J($);if(D===null)B2("WebGLRenderer: "+$+" extension not supported.");return D}}}function A8(z,Q,J,$){let D={},G=new WeakMap;function U(h){let Y=h.target;if(Y.index!==null)Q.remove(Y.index);for(let S in Y.attributes)Q.remove(Y.attributes[S]);Y.removeEventListener("dispose",U),delete D[Y.id];let M=G.get(Y);if(M)Q.remove(M),G.delete(Y);if($.releaseStatesOfGeometry(Y),Y.isInstancedBufferGeometry===!0)delete Y._maxInstanceCount;J.memory.geometries--}function k(h,Y){if(D[Y.id]===!0)return Y;return Y.addEventListener("dispose",U),D[Y.id]=!0,J.memory.geometries++,Y}function x(h){let Y=h.attributes;for(let M in Y)Q.update(Y[M],z.ARRAY_BUFFER)}function F(h){let Y=[],M=h.index,S=h.attributes.position,g=0;if(S===void 0)return;if(M!==null){let P=M.array;g=M.version;for(let c=0,X=P.length;c<X;c+=3){let I=P[c+0],L=P[c+1],R=P[c+2];Y.push(I,L,L,R,R,I)}}else{let P=S.array;g=S.version;for(let c=0,X=P.length/3-1;c<X;c+=3){let I=c+0,L=c+1,R=c+2;Y.push(I,L,L,R,R,I)}}let Z=new(S.count>=65535?G2:N2)(Y,1);Z.version=g;let q=G.get(h);if(q)Q.remove(q);G.set(h,Z)}function j(h){let Y=G.get(h);if(Y){let M=h.index;if(M!==null){if(Y.version<M.version)F(h)}}else F(h);return G.get(h)}return{get:k,update:x,getWireframeAttribute:j}}function O8(z,Q,J){let $;function D(h){$=h}let G,U;function k(h){G=h.type,U=h.bytesPerElement}function x(h,Y){z.drawElements($,Y,G,h*U),J.update(Y,$,1)}function F(h,Y,M){if(M===0)return;z.drawElementsInstanced($,Y,G,h*U,M),J.update(Y,$,M)}function j(h,Y,M){if(M===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,Y,0,G,h,0,M);let g=0;for(let Z=0;Z<M;Z++)g+=Y[Z];J.update(g,$,1)}this.setMode=D,this.setIndex=k,this.render=x,this.renderInstances=F,this.renderMultiDraw=j}function F8(z){let Q={geometries:0,textures:0},J={frame:0,calls:0,triangles:0,points:0,lines:0};function $(G,U,k){switch(J.calls++,U){case z.TRIANGLES:J.triangles+=k*(G/3);break;case z.LINES:J.lines+=k*(G/2);break;case z.LINE_STRIP:J.lines+=k*(G-1);break;case z.LINE_LOOP:J.lines+=k*G;break;case z.POINTS:J.points+=k*G;break;default:rz("WebGLInfo: Unknown draw mode:",U);break}}function D(){J.calls=0,J.triangles=0,J.points=0,J.lines=0}return{memory:Q,render:J,programs:null,autoReset:!0,reset:D,update:$}}function M8(z,Q,J){let $=new WeakMap,D=new kJ;function G(U,k,x){let F=U.morphTargetInfluences,j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,h=j!==void 0?j.length:0,Y=$.get(k);if(Y===void 0||Y.count!==h){let V=function(){R.dispose(),$.delete(k),k.removeEventListener("dispose",V)};if(Y!==void 0)Y.texture.dispose();let M=k.morphAttributes.position!==void 0,S=k.morphAttributes.normal!==void 0,g=k.morphAttributes.color!==void 0,Z=k.morphAttributes.position||[],q=k.morphAttributes.normal||[],P=k.morphAttributes.color||[],c=0;if(M===!0)c=1;if(S===!0)c=2;if(g===!0)c=3;let X=k.attributes.position.count*c,I=1;if(X>Q.maxTextureSize)I=Math.ceil(X/Q.maxTextureSize),X=Q.maxTextureSize;let L=new Float32Array(X*I*4*h),R=new F1(L,X,I,h);R.type=bJ,R.needsUpdate=!0;let N=c*4;for(let s=0;s<h;s++){let v=Z[s],_=q[s],zz=P[s],C=X*I*4*s;for(let l=0;l<v.count;l++){let a=l*N;if(M===!0)D.fromBufferAttribute(v,l),L[C+a+0]=D.x,L[C+a+1]=D.y,L[C+a+2]=D.z,L[C+a+3]=0;if(S===!0)D.fromBufferAttribute(_,l),L[C+a+4]=D.x,L[C+a+5]=D.y,L[C+a+6]=D.z,L[C+a+7]=0;if(g===!0)D.fromBufferAttribute(zz,l),L[C+a+8]=D.x,L[C+a+9]=D.y,L[C+a+10]=D.z,L[C+a+11]=zz.itemSize===4?D.w:1}}Y={count:h,texture:R,size:new IJ(X,I)},$.set(k,Y),k.addEventListener("dispose",V)}if(U.isInstancedMesh===!0&&U.morphTexture!==null)x.getUniforms().setValue(z,"morphTexture",U.morphTexture,J);else{let M=0;for(let g=0;g<F.length;g++)M+=F[g];let S=k.morphTargetsRelative?1:1-M;x.getUniforms().setValue(z,"morphTargetBaseInfluence",S),x.getUniforms().setValue(z,"morphTargetInfluences",F)}x.getUniforms().setValue(z,"morphTargetsTexture",Y.texture,J),x.getUniforms().setValue(z,"morphTargetsTextureSize",Y.size)}return{update:G}}function L8(z,Q,J,$,D){let G=new WeakMap;function U(F){let j=D.render.frame,h=F.geometry,Y=Q.get(F,h);if(G.get(Y)!==j)Q.update(Y),G.set(Y,j);if(F.isInstancedMesh){if(F.hasEventListener("dispose",x)===!1)F.addEventListener("dispose",x);if(G.get(F)!==j){if(J.update(F.instanceMatrix,z.ARRAY_BUFFER),F.instanceColor!==null)J.update(F.instanceColor,z.ARRAY_BUFFER);G.set(F,j)}}if(F.isSkinnedMesh){let M=F.skeleton;if(G.get(M)!==j)M.update(),G.set(M,j)}return Y}function k(){G=new WeakMap}function x(F){let j=F.target;if(j.removeEventListener("dispose",x),$.releaseStatesOfObject(j),J.remove(j.instanceMatrix),j.instanceColor!==null)J.remove(j.instanceColor)}return{update:U,dispose:k}}var y8={[R1]:"LINEAR_TONE_MAPPING",[S1]:"REINHARD_TONE_MAPPING",[C1]:"CINEON_TONE_MAPPING",[w1]:"ACES_FILMIC_TONE_MAPPING",[y1]:"AGX_TONE_MAPPING",[L1]:"NEUTRAL_TONE_MAPPING",[M1]:"CUSTOM_TONE_MAPPING"};function w8(z,Q,J,$,D,G){let U=new OJ(Q,J,{type:z,depthBuffer:D,stencilBuffer:G,samples:$?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),k=null,x=null,F=new OQ;F.setAttribute("position",new G0([-1,3,0,-1,-1,0,3,-1,0],3)),F.setAttribute("uv",new G0([0,2,0,0,2,0],2));let j=new D2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new fJ(F,j),Y=new E1(-1,1,1,-1,0,1),M=null,S=null,g=!1,Z,q=null,P=[],c=!1;this.setSize=function(X,I){if(U.setSize(X,I),k!==null)k.setSize(X,I);if(x!==null)x.setSize(X,I);for(let L=0;L<P.length;L++){let R=P[L];if(R.setSize)R.setSize(X,I)}},this.setEffects=function(X){P=X,c=P.length>0&&P[0].isRenderPass===!0;let{width:I,height:L}=U;if(P.length>0&&k===null)k=new OJ(I,L,{type:hJ,depthBuffer:!1,stencilBuffer:!1}),x=new OJ(I,L,{type:hJ,depthBuffer:!1,stencilBuffer:!1});for(let R=0;R<P.length;R++){let N=P[R];if(N.setSize)N.setSize(I,L)}},this.begin=function(X,I){if(g)return!1;if(X.toneMapping===CJ&&P.length===0)return!1;if(q=I,I!==null){let{width:L,height:R}=I;if(U.width!==L||U.height!==R)this.setSize(L,R)}if(c===!1)X.setRenderTarget(U);return Z=X.toneMapping,X.toneMapping=CJ,!0},this.hasRenderPass=function(){return c},this.end=function(X,I){X.toneMapping=Z,g=!0;let L=U,R=k;for(let N=0;N<P.length;N++){let V=P[N];if(V.enabled===!1)continue;if(V.render(X,R,L,I),V.needsSwap!==!1)L=R,R=R===k?x:k}if(M!==X.outputColorSpace||S!==X.toneMapping){if(M=X.outputColorSpace,S=X.toneMapping,j.defines={},JJ.getTransfer(M)===iz)j.defines.SRGB_TRANSFER="";let N=y8[S];if(N)j.defines[N]="";j.needsUpdate=!0}j.uniforms.tDiffuse.value=L.texture,X.setRenderTarget(q),X.render(h,Y),q=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){if(U.dispose(),k!==null)k.dispose();if(x!==null)x.dispose();F.dispose(),j.dispose()}}var p1=new U2,nQ=new HQ(1,1),u1=new F1,g1=new Z2,l1=new O1,e0=[],z1=[],J1=new Float32Array(16),Q1=new Float32Array(9),$1=new Float32Array(4);function zQ(z,Q,J){let $=z[0];if($<=0||$>0)return z;let D=Q*J,G=e0[D];if(G===void 0)G=new Float32Array(D),e0[D]=G;if(Q!==0){$.toArray(G,0);for(let U=1,k=0;U!==Q;++U)k+=J,z[U].toArray(G,k)}return G}function GJ(z,Q){if(z.length!==Q.length)return!1;for(let J=0,$=z.length;J<$;J++)if(z[J]!==Q[J])return!1;return!0}function NJ(z,Q){for(let J=0,$=Q.length;J<$;J++)z[J]=Q[J]}function MQ(z,Q){let J=z1[Q];if(J===void 0)J=new Int32Array(Q),z1[Q]=J;for(let $=0;$!==Q;++$)J[$]=z.allocateTextureUnit();return J}function C8(z,Q){let J=this.cache;if(J[0]===Q)return;z.uniform1f(this.addr,Q),J[0]=Q}function S8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y)z.uniform2f(this.addr,Q.x,Q.y),J[0]=Q.x,J[1]=Q.y}else{if(GJ(J,Q))return;z.uniform2fv(this.addr,Q),NJ(J,Q)}}function R8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z)z.uniform3f(this.addr,Q.x,Q.y,Q.z),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z}else if(Q.r!==void 0){if(J[0]!==Q.r||J[1]!==Q.g||J[2]!==Q.b)z.uniform3f(this.addr,Q.r,Q.g,Q.b),J[0]=Q.r,J[1]=Q.g,J[2]=Q.b}else{if(GJ(J,Q))return;z.uniform3fv(this.addr,Q),NJ(J,Q)}}function P8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z||J[3]!==Q.w)z.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z,J[3]=Q.w}else{if(GJ(J,Q))return;z.uniform4fv(this.addr,Q),NJ(J,Q)}}function v8(z,Q){let J=this.cache,$=Q.elements;if($===void 0){if(GJ(J,Q))return;z.uniformMatrix2fv(this.addr,!1,Q),NJ(J,Q)}else{if(GJ(J,$))return;$1.set($),z.uniformMatrix2fv(this.addr,!1,$1),NJ(J,$)}}function f8(z,Q){let J=this.cache,$=Q.elements;if($===void 0){if(GJ(J,Q))return;z.uniformMatrix3fv(this.addr,!1,Q),NJ(J,Q)}else{if(GJ(J,$))return;Q1.set($),z.uniformMatrix3fv(this.addr,!1,Q1),NJ(J,$)}}function T8(z,Q){let J=this.cache,$=Q.elements;if($===void 0){if(GJ(J,Q))return;z.uniformMatrix4fv(this.addr,!1,Q),NJ(J,Q)}else{if(GJ(J,$))return;J1.set($),z.uniformMatrix4fv(this.addr,!1,J1),NJ(J,$)}}function h8(z,Q){let J=this.cache;if(J[0]===Q)return;z.uniform1i(this.addr,Q),J[0]=Q}function j8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y)z.uniform2i(this.addr,Q.x,Q.y),J[0]=Q.x,J[1]=Q.y}else{if(GJ(J,Q))return;z.uniform2iv(this.addr,Q),NJ(J,Q)}}function x8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z)z.uniform3i(this.addr,Q.x,Q.y,Q.z),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z}else{if(GJ(J,Q))return;z.uniform3iv(this.addr,Q),NJ(J,Q)}}function _8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z||J[3]!==Q.w)z.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z,J[3]=Q.w}else{if(GJ(J,Q))return;z.uniform4iv(this.addr,Q),NJ(J,Q)}}function b8(z,Q){let J=this.cache;if(J[0]===Q)return;z.uniform1ui(this.addr,Q),J[0]=Q}function d8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y)z.uniform2ui(this.addr,Q.x,Q.y),J[0]=Q.x,J[1]=Q.y}else{if(GJ(J,Q))return;z.uniform2uiv(this.addr,Q),NJ(J,Q)}}function p8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z)z.uniform3ui(this.addr,Q.x,Q.y,Q.z),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z}else{if(GJ(J,Q))return;z.uniform3uiv(this.addr,Q),NJ(J,Q)}}function u8(z,Q){let J=this.cache;if(Q.x!==void 0){if(J[0]!==Q.x||J[1]!==Q.y||J[2]!==Q.z||J[3]!==Q.w)z.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),J[0]=Q.x,J[1]=Q.y,J[2]=Q.z,J[3]=Q.w}else{if(GJ(J,Q))return;z.uniform4uiv(this.addr,Q),NJ(J,Q)}}function g8(z,Q,J){let $=this.cache,D=J.allocateTextureUnit();if($[0]!==D)z.uniform1i(this.addr,D),$[0]=D;let G;if(this.type===z.SAMPLER_2D_SHADOW)nQ.compareFunction=J.isReversedDepthBuffer()?iQ:aQ,G=nQ;else G=p1;J.setTexture2D(Q||G,D)}function l8(z,Q,J){let $=this.cache,D=J.allocateTextureUnit();if($[0]!==D)z.uniform1i(this.addr,D),$[0]=D;J.setTexture3D(Q||g1,D)}function m8(z,Q,J){let $=this.cache,D=J.allocateTextureUnit();if($[0]!==D)z.uniform1i(this.addr,D),$[0]=D;J.setTextureCube(Q||l1,D)}function c8(z,Q,J){let $=this.cache,D=J.allocateTextureUnit();if($[0]!==D)z.uniform1i(this.addr,D),$[0]=D;J.setTexture2DArray(Q||u1,D)}function n8(z){switch(z){case 5126:return C8;case 35664:return S8;case 35665:return R8;case 35666:return P8;case 35674:return v8;case 35675:return f8;case 35676:return T8;case 5124:case 35670:return h8;case 35667:case 35671:return j8;case 35668:case 35672:return x8;case 35669:case 35673:return _8;case 5125:return b8;case 36294:return d8;case 36295:return p8;case 36296:return u8;case 35678:case 36198:case 36298:case 36306:case 35682:return g8;case 35679:case 36299:case 36307:return l8;case 35680:case 36300:case 36308:case 36293:return m8;case 36289:case 36303:case 36311:case 36292:return c8}}function o8(z,Q){z.uniform1fv(this.addr,Q)}function s8(z,Q){let J=zQ(Q,this.size,2);z.uniform2fv(this.addr,J)}function i8(z,Q){let J=zQ(Q,this.size,3);z.uniform3fv(this.addr,J)}function a8(z,Q){let J=zQ(Q,this.size,4);z.uniform4fv(this.addr,J)}function t8(z,Q){let J=zQ(Q,this.size,4);z.uniformMatrix2fv(this.addr,!1,J)}function r8(z,Q){let J=zQ(Q,this.size,9);z.uniformMatrix3fv(this.addr,!1,J)}function e8(z,Q){let J=zQ(Q,this.size,16);z.uniformMatrix4fv(this.addr,!1,J)}function z9(z,Q){z.uniform1iv(this.addr,Q)}function J9(z,Q){z.uniform2iv(this.addr,Q)}function Q9(z,Q){z.uniform3iv(this.addr,Q)}function $9(z,Q){z.uniform4iv(this.addr,Q)}function K9(z,Q){z.uniform1uiv(this.addr,Q)}function W9(z,Q){z.uniform2uiv(this.addr,Q)}function q9(z,Q){z.uniform3uiv(this.addr,Q)}function B9(z,Q){z.uniform4uiv(this.addr,Q)}function G9(z,Q,J){let $=this.cache,D=Q.length,G=MQ(J,D);if(!GJ($,G))z.uniform1iv(this.addr,G),NJ($,G);let U;if(this.type===z.SAMPLER_2D_SHADOW)U=nQ;else U=p1;for(let k=0;k!==D;++k)J.setTexture2D(Q[k]||U,G[k])}function N9(z,Q,J){let $=this.cache,D=Q.length,G=MQ(J,D);if(!GJ($,G))z.uniform1iv(this.addr,G),NJ($,G);for(let U=0;U!==D;++U)J.setTexture3D(Q[U]||g1,G[U])}function D9(z,Q,J){let $=this.cache,D=Q.length,G=MQ(J,D);if(!GJ($,G))z.uniform1iv(this.addr,G),NJ($,G);for(let U=0;U!==D;++U)J.setTextureCube(Q[U]||l1,G[U])}function Z9(z,Q,J){let $=this.cache,D=Q.length,G=MQ(J,D);if(!GJ($,G))z.uniform1iv(this.addr,G),NJ($,G);for(let U=0;U!==D;++U)J.setTexture2DArray(Q[U]||u1,G[U])}function U9(z){switch(z){case 5126:return o8;case 35664:return s8;case 35665:return i8;case 35666:return a8;case 35674:return t8;case 35675:return r8;case 35676:return e8;case 5124:case 35670:return z9;case 35667:case 35671:return J9;case 35668:case 35672:return Q9;case 35669:case 35673:return $9;case 5125:return K9;case 36294:return W9;case 36295:return q9;case 36296:return B9;case 35678:case 36198:case 36298:case 36306:case 35682:return G9;case 35679:case 36299:case 36307:return N9;case 35680:case 36300:case 36308:case 36293:return D9;case 36289:case 36303:case 36311:case 36292:return Z9}}class m1{constructor(z,Q,J){this.id=z,this.addr=J,this.cache=[],this.type=Q.type,this.setValue=n8(Q.type)}}class c1{constructor(z,Q,J){this.id=z,this.addr=J,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=U9(Q.type)}}class n1{constructor(z){this.id=z,this.seq=[],this.map={}}setValue(z,Q,J){let $=this.seq;for(let D=0,G=$.length;D!==G;++D){let U=$[D];U.setValue(z,Q[U.id],J)}}}var bQ=/(\w+)(\])?(\[|\.)?/g;function K1(z,Q){z.seq.push(Q),z.map[Q.id]=Q}function V9(z,Q,J){let $=z.name,D=$.length;bQ.lastIndex=0;while(!0){let G=bQ.exec($),U=bQ.lastIndex,k=G[1],x=G[2]==="]",F=G[3];if(x)k=k|0;if(F===void 0||F==="["&&U+2===D){K1(J,F===void 0?new m1(k,z,Q):new c1(k,z,Q));break}else{let h=J.map[k];if(h===void 0)h=new n1(k),K1(J,h);J=h}}}class qQ{constructor(z,Q){this.seq=[],this.map={};let J=z.getProgramParameter(Q,z.ACTIVE_UNIFORMS);for(let G=0;G<J;++G){let U=z.getActiveUniform(Q,G),k=z.getUniformLocation(Q,U.name);V9(U,k,this)}let $=[],D=[];for(let G of this.seq)if(G.type===z.SAMPLER_2D_SHADOW||G.type===z.SAMPLER_CUBE_SHADOW||G.type===z.SAMPLER_2D_ARRAY_SHADOW)$.push(G);else D.push(G);if($.length>0)this.seq=$.concat(D)}setValue(z,Q,J,$){let D=this.map[Q];if(D!==void 0)D.setValue(z,J,$)}setOptional(z,Q,J){let $=Q[J];if($!==void 0)this.setValue(z,J,$)}static upload(z,Q,J,$){for(let D=0,G=Q.length;D!==G;++D){let U=Q[D],k=J[U.id];if(k.needsUpdate!==!1)U.setValue(z,k.value,$)}}static seqWithValue(z,Q){let J=[];for(let $=0,D=z.length;$!==D;++$){let G=z[$];if(G.id in Q)J.push(G)}return J}}function W1(z,Q,J){let $=z.createShader(Q);return z.shaderSource($,J),z.compileShader($),$}var Y9=37297,X9=0;function k9(z,Q){let J=z.split(`
`),$=[],D=Math.max(Q-6,0),G=Math.min(Q+6,J.length);for(let U=D;U<G;U++){let k=U+1;$.push(`${k===Q?">":" "} ${k}: ${J[U]}`)}return $.join(`
`)}var q1=new _z;function I9(z){JJ._getMatrix(q1,JJ.workingColorSpace,z);let Q=`mat3( ${q1.elements.map((J)=>J.toFixed(4))} )`;switch(JJ.getTransfer(z)){case P1:return[Q,"LinearTransferOETF"];case iz:return[Q,"sRGBTransferOETF"];default:return mz("WebGLProgram: Unsupported color space: ",z),[Q,"LinearTransferOETF"]}}function B1(z,Q,J){let $=z.getShaderParameter(Q,z.COMPILE_STATUS),G=(z.getShaderInfoLog(Q)||"").trim();if($&&G==="")return"";let U=/ERROR: 0:(\d+)/.exec(G);if(U){let k=parseInt(U[1]);return J.toUpperCase()+`

`+G+`

`+k9(z.getShaderSource(Q),k)}else return G}function H9(z,Q){let J=I9(Q);return[`vec4 ${z}( vec4 value ) {`,`	return ${J[1]}( vec4( value.rgb * ${J[0]}, value.a ) );`,"}"].join(`
`)}var E9={[R1]:"Linear",[S1]:"Reinhard",[C1]:"Cineon",[w1]:"ACESFilmic",[y1]:"AgX",[L1]:"Neutral",[M1]:"Custom"};function A9(z,Q){let J=E9[Q];if(J===void 0)return mz("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+z+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+z+"( vec3 color ) { return "+J+"ToneMapping( color ); }"}var YQ=new hz;function O9(){JJ.getLuminanceCoefficients(YQ);let z=YQ.x.toFixed(4),Q=YQ.y.toFixed(4),J=YQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${z}, ${Q}, ${J} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function F9(z){return[z.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",z.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(WQ).join(`
`)}function M9(z){let Q=[];for(let J in z){let $=z[J];if($===!1)continue;Q.push("#define "+J+" "+$)}return Q.join(`
`)}function L9(z,Q){let J={},$=z.getProgramParameter(Q,z.ACTIVE_ATTRIBUTES);for(let D=0;D<$;D++){let G=z.getActiveAttrib(Q,D),U=G.name,k=1;if(G.type===z.FLOAT_MAT2)k=2;if(G.type===z.FLOAT_MAT3)k=3;if(G.type===z.FLOAT_MAT4)k=4;J[U]={type:G.type,location:z.getAttribLocation(Q,U),locationSize:k}}return J}function WQ(z){return z!==""}function G1(z,Q){let J=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return z.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,J).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function N1(z,Q){return z.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var y9=/^[ \t]*#include +<([\w\d./]+)>/gm;function oQ(z){return z.replace(y9,C9)}var w9=new Map;function C9(z,Q){let J=Pz[Q];if(J===void 0){let $=w9.get(Q);if($!==void 0)J=Pz[$],mz('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return oQ(J)}var S9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D1(z){return z.replace(S9,R9)}function R9(z,Q,J,$){let D="";for(let G=parseInt(Q);G<parseInt(J);G++)D+=$.replace(/\[\s*i\s*\]/g,"[ "+G+" ]").replace(/UNROLLED_LOOP_INDEX/g,G);return D}function Z1(z){let Q=`precision ${z.precision} float;
	precision ${z.precision} int;
	precision ${z.precision} sampler2D;
	precision ${z.precision} samplerCube;
	precision ${z.precision} sampler3D;
	precision ${z.precision} sampler2DArray;
	precision ${z.precision} sampler2DShadow;
	precision ${z.precision} samplerCubeShadow;
	precision ${z.precision} sampler2DArrayShadow;
	precision ${z.precision} isampler2D;
	precision ${z.precision} isampler3D;
	precision ${z.precision} isamplerCube;
	precision ${z.precision} isampler2DArray;
	precision ${z.precision} usampler2D;
	precision ${z.precision} usampler3D;
	precision ${z.precision} usamplerCube;
	precision ${z.precision} usampler2DArray;
	`;if(z.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(z.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(z.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var P9={[kQ]:"SHADOWMAP_TYPE_PCF",[KQ]:"SHADOWMAP_TYPE_VSM"};function v9(z){return P9[z.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f9={[GQ]:"ENVMAP_TYPE_CUBE",[tJ]:"ENVMAP_TYPE_CUBE",[AQ]:"ENVMAP_TYPE_CUBE_UV"};function T9(z){if(z.envMap===!1)return"ENVMAP_TYPE_CUBE";return f9[z.envMapMode]||"ENVMAP_TYPE_CUBE"}var h9={[tJ]:"ENVMAP_MODE_REFRACTION"};function j9(z){if(z.envMap===!1)return"ENVMAP_MODE_REFLECTION";return h9[z.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x9={[X2]:"ENVMAP_BLENDING_MULTIPLY",[Y2]:"ENVMAP_BLENDING_MIX",[V2]:"ENVMAP_BLENDING_ADD"};function _9(z){if(z.envMap===!1)return"ENVMAP_BLENDING_NONE";return x9[z.combine]||"ENVMAP_BLENDING_NONE"}function b9(z){let Q=z.envMapCubeUVHeight;if(Q===null)return null;let J=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:$,maxMip:J}}function d9(z,Q,J,$){let D=z.getContext(),G=J.defines,U=J.vertexShader,k=J.fragmentShader,x=v9(J),F=T9(J),j=j9(J),h=_9(J),Y=b9(J),M=F9(J),S=M9(G),g=D.createProgram(),Z,q,P=J.glslVersion?"#version "+J.glslVersion+`
`:"";if(J.isRawShaderMaterial){if(Z=["#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,S].filter(WQ).join(`
`),Z.length>0)Z+=`
`;if(q=["#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,S].filter(WQ).join(`
`),q.length>0)q+=`
`}else Z=[Z1(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,S,J.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",J.batching?"#define USE_BATCHING":"",J.batchingColor?"#define USE_BATCHING_COLOR":"",J.instancing?"#define USE_INSTANCING":"",J.instancingColor?"#define USE_INSTANCING_COLOR":"",J.instancingMorph?"#define USE_INSTANCING_MORPH":"",J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.map?"#define USE_MAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+j:"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.displacementMap?"#define USE_DISPLACEMENTMAP":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.mapUv?"#define MAP_UV "+J.mapUv:"",J.alphaMapUv?"#define ALPHAMAP_UV "+J.alphaMapUv:"",J.lightMapUv?"#define LIGHTMAP_UV "+J.lightMapUv:"",J.aoMapUv?"#define AOMAP_UV "+J.aoMapUv:"",J.emissiveMapUv?"#define EMISSIVEMAP_UV "+J.emissiveMapUv:"",J.bumpMapUv?"#define BUMPMAP_UV "+J.bumpMapUv:"",J.normalMapUv?"#define NORMALMAP_UV "+J.normalMapUv:"",J.displacementMapUv?"#define DISPLACEMENTMAP_UV "+J.displacementMapUv:"",J.metalnessMapUv?"#define METALNESSMAP_UV "+J.metalnessMapUv:"",J.roughnessMapUv?"#define ROUGHNESSMAP_UV "+J.roughnessMapUv:"",J.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+J.anisotropyMapUv:"",J.clearcoatMapUv?"#define CLEARCOATMAP_UV "+J.clearcoatMapUv:"",J.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+J.clearcoatNormalMapUv:"",J.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+J.clearcoatRoughnessMapUv:"",J.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+J.iridescenceMapUv:"",J.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+J.iridescenceThicknessMapUv:"",J.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+J.sheenColorMapUv:"",J.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+J.sheenRoughnessMapUv:"",J.specularMapUv?"#define SPECULARMAP_UV "+J.specularMapUv:"",J.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+J.specularColorMapUv:"",J.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+J.specularIntensityMapUv:"",J.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+J.transmissionMapUv:"",J.thicknessMapUv?"#define THICKNESSMAP_UV "+J.thicknessMapUv:"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexNormals?"#define HAS_NORMAL":"",J.vertexColors?"#define USE_COLOR":"",J.vertexAlphas?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.flatShading?"#define FLAT_SHADED":"",J.skinning?"#define USE_SKINNING":"",J.morphTargets?"#define USE_MORPHTARGETS":"",J.morphNormals&&J.flatShading===!1?"#define USE_MORPHNORMALS":"",J.morphColors?"#define USE_MORPHCOLORS":"",J.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+J.morphTextureStride:"",J.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+J.morphTargetsCount:"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+x:"",J.sizeAttenuation?"#define USE_SIZEATTENUATION":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",J.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(WQ).join(`
`),q=[Z1(J),"#define SHADER_TYPE "+J.shaderType,"#define SHADER_NAME "+J.shaderName,S,J.useFog&&J.fog?"#define USE_FOG":"",J.useFog&&J.fogExp2?"#define FOG_EXP2":"",J.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",J.map?"#define USE_MAP":"",J.matcap?"#define USE_MATCAP":"",J.envMap?"#define USE_ENVMAP":"",J.envMap?"#define "+F:"",J.envMap?"#define "+j:"",J.envMap?"#define "+h:"",Y?"#define CUBEUV_TEXEL_WIDTH "+Y.texelWidth:"",Y?"#define CUBEUV_TEXEL_HEIGHT "+Y.texelHeight:"",Y?"#define CUBEUV_MAX_MIP "+Y.maxMip+".0":"",J.lightMap?"#define USE_LIGHTMAP":"",J.aoMap?"#define USE_AOMAP":"",J.bumpMap?"#define USE_BUMPMAP":"",J.normalMap?"#define USE_NORMALMAP":"",J.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",J.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",J.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",J.emissiveMap?"#define USE_EMISSIVEMAP":"",J.anisotropy?"#define USE_ANISOTROPY":"",J.anisotropyMap?"#define USE_ANISOTROPYMAP":"",J.clearcoat?"#define USE_CLEARCOAT":"",J.clearcoatMap?"#define USE_CLEARCOATMAP":"",J.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",J.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",J.dispersion?"#define USE_DISPERSION":"",J.retroreflection?"#define USE_RETROREFLECTION":"",J.iridescence?"#define USE_IRIDESCENCE":"",J.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",J.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",J.specularMap?"#define USE_SPECULARMAP":"",J.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",J.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",J.roughnessMap?"#define USE_ROUGHNESSMAP":"",J.metalnessMap?"#define USE_METALNESSMAP":"",J.alphaMap?"#define USE_ALPHAMAP":"",J.alphaTest?"#define USE_ALPHATEST":"",J.alphaHash?"#define USE_ALPHAHASH":"",J.sheen?"#define USE_SHEEN":"",J.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",J.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",J.transmission?"#define USE_TRANSMISSION":"",J.transmissionMap?"#define USE_TRANSMISSIONMAP":"",J.thicknessMap?"#define USE_THICKNESSMAP":"",J.vertexTangents&&J.flatShading===!1?"#define USE_TANGENT":"",J.vertexColors||J.instancingColor?"#define USE_COLOR":"",J.vertexAlphas||J.batchingColor?"#define USE_COLOR_ALPHA":"",J.vertexUv1s?"#define USE_UV1":"",J.vertexUv2s?"#define USE_UV2":"",J.vertexUv3s?"#define USE_UV3":"",J.pointsUvs?"#define USE_POINTS_UV":"",J.gradientMap?"#define USE_GRADIENTMAP":"",J.flatShading?"#define FLAT_SHADED":"",J.doubleSided?"#define DOUBLE_SIDED":"",J.flipSided?"#define FLIP_SIDED":"",J.shadowMapEnabled?"#define USE_SHADOWMAP":"",J.shadowMapEnabled?"#define "+x:"",J.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",J.numLightProbes>0?"#define USE_LIGHT_PROBES":"",J.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",J.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",J.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",J.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",J.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",J.toneMapping!==CJ?"#define TONE_MAPPING":"",J.toneMapping!==CJ?Pz.tonemapping_pars_fragment:"",J.toneMapping!==CJ?A9("toneMapping",J.toneMapping):"",J.dithering?"#define DITHERING":"",J.opaque?"#define OPAQUE":"",Pz.colorspace_pars_fragment,H9("linearToOutputTexel",J.outputColorSpace),O9(),J.useDepthPacking?"#define DEPTH_PACKING "+J.depthPacking:"",`
`].filter(WQ).join(`
`);if(U=oQ(U),U=G1(U,J),U=N1(U,J),k=oQ(k),k=G1(k,J),k=N1(k,J),U=D1(U),k=D1(k),J.isRawShaderMaterial!==!0)P=`#version 300 es
`,Z=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Z,q=["#define varying in",J.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",J.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let c=P+Z+U,X=P+q+k,I=W1(D,D.VERTEX_SHADER,c),L=W1(D,D.FRAGMENT_SHADER,X);if(D.attachShader(g,I),D.attachShader(g,L),J.index0AttributeName!==void 0)D.bindAttribLocation(g,0,J.index0AttributeName);else if(J.hasPositionAttribute===!0)D.bindAttribLocation(g,0,"position");D.linkProgram(g);function R(v){if(z.debug.checkShaderErrors){let _=D.getProgramInfoLog(g)||"",zz=D.getShaderInfoLog(I)||"",C=D.getShaderInfoLog(L)||"",l=_.trim(),a=zz.trim(),d=C.trim(),Vz=!0,n=!0;if(D.getProgramParameter(g,D.LINK_STATUS)===!1)if(Vz=!1,typeof z.debug.onShaderError==="function")z.debug.onShaderError(D,g,I,L);else{let t=B1(D,I,"vertex"),e=B1(D,L,"fragment");rz("WebGLProgram: Shader Error "+D.getError()+" - VALIDATE_STATUS "+D.getProgramParameter(g,D.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+l+`
`+t+`
`+e)}else if(l!=="")mz("WebGLProgram: Program Info Log:",l);else if(a===""||d==="")n=!1;if(n)v.diagnostics={runnable:Vz,programLog:l,vertexShader:{log:a,prefix:Z},fragmentShader:{log:d,prefix:q}}}D.deleteShader(I),D.deleteShader(L),N=new qQ(D,g),V=L9(D,g)}let N;this.getUniforms=function(){if(N===void 0)R(this);return N};let V;this.getAttributes=function(){if(V===void 0)R(this);return V};let s=J.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(s===!1)s=D.getProgramParameter(g,Y9);return s},this.destroy=function(){$.releaseStatesOfProgram(this),D.deleteProgram(g),this.program=void 0},this.type=J.shaderType,this.name=J.shaderName,this.id=X9++,this.cacheKey=Q,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}var p9=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(z,Q,J){let $=this._getShaderCacheForMaterial(z);if($.has(Q)===!1)$.add(Q),Q.usedTimes++;if($.has(J)===!1)$.add(J),J.usedTimes++;return this}remove(z){let Q=this.materialCache.get(z);for(let J of Q)if(J.usedTimes--,J.usedTimes===0)this.shaderCache.delete(J.code);return this.materialCache.delete(z),this}getVertexShaderStage(z){return this._getShaderStage(z.vertexShader)}getFragmentShaderStage(z){return this._getShaderStage(z.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(z){let Q=this.materialCache,J=Q.get(z);if(J===void 0)J=new Set,Q.set(z,J);return J}_getShaderStage(z){let Q=this.shaderCache,J=Q.get(z);if(J===void 0)J=new s1(z),Q.set(z,J);return J}}class s1{constructor(z){this.id=p9++,this.code=z,this.usedTimes=0}}function u9(z){return z===rJ||z===gQ||z===lQ}function g9(z,Q,J,$,D,G){let U=new H2,k=new o1,x=new Set,F=[],j=new Map,h=$.logarithmicDepthBuffer,Y=$.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(N){if(x.add(N),N===0)return"uv";return`uv${N}`}function g(N,V,s,v,_,zz){let C=v.fog,l=_.geometry,a=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?v.environment:null,d=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Vz=Q.get(N.envMap||a,d),n=!!Vz&&Vz.mapping===AQ?Vz.image.height:null,t=M[N.type];if(N.precision!==null){if(Y=$.getMaxPrecision(N.precision),Y!==N.precision)mz("WebGLProgram.getParameters:",N.precision,"not supported, using",Y,"instead.")}let e=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,Sz=e!==void 0?e.length:0,Lz=0;if(l.morphAttributes.position!==void 0)Lz=1;if(l.morphAttributes.normal!==void 0)Lz=2;if(l.morphAttributes.color!==void 0)Lz=3;let $J,Tz,u,Qz;if(t){let oz=yJ[t];$J=oz.vertexShader,Tz=oz.fragmentShader}else{$J=N.vertexShader,Tz=N.fragmentShader;let oz=k.getVertexShaderStage(N),uz=k.getFragmentShaderStage(N);k.update(N,oz,uz),u=oz.id,Qz=uz.id}let $z=z.getRenderTarget(),yz=z.state.buffers.depth.getReversed(),wz=_.isInstancedMesh===!0,Mz=_.isBatchedMesh===!0,WJ=!!N.map,fz=!!N.matcap,jz=!!Vz,lz=!!N.aoMap,xz=!!N.lightMap,DJ=!!N.bumpMap&&N.wireframe===!1,az=!!N.normalMap,VJ=!!N.displacementMap,qJ=!!N.emissiveMap,BJ=!!N.metalnessMap,E=!!N.roughnessMap,YJ=N.anisotropy>0,pz=N.clearcoat>0,zJ=N.dispersion>0,B=N.retroreflectivity>0,K=N.iridescence>0,H=N.sheen>0,f=N.transmission>0,i=YJ&&!!N.anisotropyMap,Jz=pz&&!!N.clearcoatMap,qz=pz&&!!N.clearcoatNormalMap,b=pz&&!!N.clearcoatRoughnessMap,m=K&&!!N.iridescenceMap,Uz=K&&!!N.iridescenceThicknessMap,Az=H&&!!N.sheenColorMap,Bz=H&&!!N.sheenRoughnessMap,r=!!N.specularMap,Oz=!!N.specularColorMap,Fz=!!N.specularIntensityMap,dz=f&&!!N.transmissionMap,O=f&&!!N.thicknessMap,Kz=!!N.gradientMap,p=!!N.alphaMap,Wz=N.alphaTest>0,Yz=!!N.alphaHash,o=!!N.extensions,Nz=CJ;if(N.toneMapped){if($z===null||$z.isXRRenderTarget===!0)Nz=z.toneMapping}let Cz={shaderID:t,shaderType:N.type,shaderName:N.name,vertexShader:$J,fragmentShader:Tz,defines:N.defines,customVertexShaderID:u,customFragmentShaderID:Qz,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:Y,batching:Mz,batchingColor:Mz&&_._colorsTexture!==null,instancing:wz,instancingColor:wz&&_.instanceColor!==null,instancingMorph:wz&&_.morphTexture!==null,outputColorSpace:$z===null?z.outputColorSpace:$z.isXRRenderTarget===!0?$z.texture.colorSpace:JJ.workingColorSpace,alphaToCoverage:!!N.alphaToCoverage,map:WJ,matcap:fz,envMap:jz,envMapMode:jz&&Vz.mapping,envMapCubeUVHeight:n,aoMap:lz,lightMap:xz,bumpMap:DJ,normalMap:az,displacementMap:VJ,emissiveMap:qJ,normalMapObjectSpace:az&&N.normalMapType===I2,normalMapTangentSpace:az&&N.normalMapType===D0,packedNormalMap:az&&N.normalMapType===D0&&u9(N.normalMap.format),metalnessMap:BJ,roughnessMap:E,anisotropy:YJ,anisotropyMap:i,clearcoat:pz,clearcoatMap:Jz,clearcoatNormalMap:qz,clearcoatRoughnessMap:b,dispersion:zJ,retroreflection:B,iridescence:K,iridescenceMap:m,iridescenceThicknessMap:Uz,sheen:H,sheenColorMap:Az,sheenRoughnessMap:Bz,specularMap:r,specularColorMap:Oz,specularIntensityMap:Fz,transmission:f,transmissionMap:dz,thicknessMap:O,gradientMap:Kz,opaque:N.transparent===!1&&N.blending===IQ&&N.alphaToCoverage===!1,alphaMap:p,alphaTest:Wz,alphaHash:Yz,combine:N.combine,mapUv:WJ&&S(N.map.channel),aoMapUv:lz&&S(N.aoMap.channel),lightMapUv:xz&&S(N.lightMap.channel),bumpMapUv:DJ&&S(N.bumpMap.channel),normalMapUv:az&&S(N.normalMap.channel),displacementMapUv:VJ&&S(N.displacementMap.channel),emissiveMapUv:qJ&&S(N.emissiveMap.channel),metalnessMapUv:BJ&&S(N.metalnessMap.channel),roughnessMapUv:E&&S(N.roughnessMap.channel),anisotropyMapUv:i&&S(N.anisotropyMap.channel),clearcoatMapUv:Jz&&S(N.clearcoatMap.channel),clearcoatNormalMapUv:qz&&S(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&S(N.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&S(N.iridescenceMap.channel),iridescenceThicknessMapUv:Uz&&S(N.iridescenceThicknessMap.channel),sheenColorMapUv:Az&&S(N.sheenColorMap.channel),sheenRoughnessMapUv:Bz&&S(N.sheenRoughnessMap.channel),specularMapUv:r&&S(N.specularMap.channel),specularColorMapUv:Oz&&S(N.specularColorMap.channel),specularIntensityMapUv:Fz&&S(N.specularIntensityMap.channel),transmissionMapUv:dz&&S(N.transmissionMap.channel),thicknessMapUv:O&&S(N.thicknessMap.channel),alphaMapUv:p&&S(N.alphaMap.channel),vertexTangents:!!l.attributes.tangent&&(az||YJ),vertexNormals:!!l.attributes.normal,vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!l.attributes.color&&l.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!l.attributes.uv&&(WJ||p),fog:!!C,useFog:N.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:N.wireframe===!1&&(N.flatShading===!0||l.attributes.normal===void 0&&az===!1&&(N.isMeshLambertMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isMeshPhysicalMaterial)),sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:yz,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:l.attributes.position!==void 0,morphTargets:l.morphAttributes.position!==void 0,morphNormals:l.morphAttributes.normal!==void 0,morphColors:l.morphAttributes.color!==void 0,morphTargetsCount:Sz,morphTextureStride:Lz,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:zz.length,numClippingPlanes:G.numPlanes,numClipIntersection:G.numIntersection,dithering:N.dithering,shadowMapEnabled:z.shadowMap.enabled&&s.length>0,shadowMapType:z.shadowMap.type,toneMapping:Nz,decodeVideoTexture:WJ&&N.map.isVideoTexture===!0&&JJ.getTransfer(N.map.colorSpace)===iz,decodeVideoTextureEmissive:qJ&&N.emissiveMap.isVideoTexture===!0&&JJ.getTransfer(N.emissiveMap.colorSpace)===iz,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===RJ,flipSided:N.side===EJ,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:o&&N.extensions.clipCullDistance===!0&&J.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(o&&N.extensions.multiDraw===!0||Mz)&&J.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:J.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Cz.vertexUv1s=x.has(1),Cz.vertexUv2s=x.has(2),Cz.vertexUv3s=x.has(3),x.clear(),Cz}function Z(N){let V=[];if(N.shaderID)V.push(N.shaderID);else V.push(N.customVertexShaderID),V.push(N.customFragmentShaderID);if(N.defines!==void 0)for(let s in N.defines)V.push(s),V.push(N.defines[s]);if(N.isRawShaderMaterial===!1)q(V,N),P(V,N),V.push(z.outputColorSpace);return V.push(N.customProgramCacheKey),V.join()}function q(N,V){N.push(V.precision),N.push(V.outputColorSpace),N.push(V.envMapMode),N.push(V.envMapCubeUVHeight),N.push(V.mapUv),N.push(V.alphaMapUv),N.push(V.lightMapUv),N.push(V.aoMapUv),N.push(V.bumpMapUv),N.push(V.normalMapUv),N.push(V.displacementMapUv),N.push(V.emissiveMapUv),N.push(V.metalnessMapUv),N.push(V.roughnessMapUv),N.push(V.anisotropyMapUv),N.push(V.clearcoatMapUv),N.push(V.clearcoatNormalMapUv),N.push(V.clearcoatRoughnessMapUv),N.push(V.iridescenceMapUv),N.push(V.iridescenceThicknessMapUv),N.push(V.sheenColorMapUv),N.push(V.sheenRoughnessMapUv),N.push(V.specularMapUv),N.push(V.specularColorMapUv),N.push(V.specularIntensityMapUv),N.push(V.transmissionMapUv),N.push(V.thicknessMapUv),N.push(V.combine),N.push(V.fogExp2),N.push(V.sizeAttenuation),N.push(V.morphTargetsCount),N.push(V.morphAttributeCount),N.push(V.numSunLights),N.push(V.numDirLights),N.push(V.numPointLights),N.push(V.numSpotLights),N.push(V.numSpotLightMaps),N.push(V.numHemiLights),N.push(V.numRectAreaLights),N.push(V.numSunLightShadows),N.push(V.numDirLightShadows),N.push(V.numPointLightShadows),N.push(V.numSpotLightShadows),N.push(V.numSpotLightShadowsWithMaps),N.push(V.numLightProbes),N.push(V.shadowMapType),N.push(V.toneMapping),N.push(V.numClippingPlanes),N.push(V.numClipIntersection),N.push(V.depthPacking)}function P(N,V){if(U.disableAll(),V.instancing)U.enable(0);if(V.instancingColor)U.enable(1);if(V.instancingMorph)U.enable(2);if(V.matcap)U.enable(3);if(V.envMap)U.enable(4);if(V.normalMapObjectSpace)U.enable(5);if(V.normalMapTangentSpace)U.enable(6);if(V.clearcoat)U.enable(7);if(V.iridescence)U.enable(8);if(V.alphaTest)U.enable(9);if(V.vertexColors)U.enable(10);if(V.vertexAlphas)U.enable(11);if(V.vertexUv1s)U.enable(12);if(V.vertexUv2s)U.enable(13);if(V.vertexUv3s)U.enable(14);if(V.vertexTangents)U.enable(15);if(V.anisotropy)U.enable(16);if(V.alphaHash)U.enable(17);if(V.batching)U.enable(18);if(V.dispersion)U.enable(19);if(V.retroreflection)U.enable(24);if(V.batchingColor)U.enable(20);if(V.gradientMap)U.enable(21);if(V.packedNormalMap)U.enable(22);if(V.vertexNormals)U.enable(23);if(N.push(U.mask),U.disableAll(),V.fog)U.enable(0);if(V.useFog)U.enable(1);if(V.flatShading)U.enable(2);if(V.logarithmicDepthBuffer)U.enable(3);if(V.reversedDepthBuffer)U.enable(4);if(V.skinning)U.enable(5);if(V.morphTargets)U.enable(6);if(V.morphNormals)U.enable(7);if(V.morphColors)U.enable(8);if(V.premultipliedAlpha)U.enable(9);if(V.shadowMapEnabled)U.enable(10);if(V.doubleSided)U.enable(11);if(V.flipSided)U.enable(12);if(V.useDepthPacking)U.enable(13);if(V.dithering)U.enable(14);if(V.transmission)U.enable(15);if(V.sheen)U.enable(16);if(V.opaque)U.enable(17);if(V.pointsUvs)U.enable(18);if(V.decodeVideoTexture)U.enable(19);if(V.decodeVideoTextureEmissive)U.enable(20);if(V.alphaToCoverage)U.enable(21);if(V.numLightProbeGrids>0)U.enable(22);if(V.hasPositionAttribute)U.enable(23);N.push(U.mask)}function c(N){let V=M[N.type],s;if(V){let v=yJ[V];s=k2.clone(v.uniforms)}else s=N.uniforms;return s}function X(N,V){let s=j.get(V);if(s!==void 0)++s.usedTimes;else s=new d9(z,V,N,D),F.push(s),j.set(V,s);return s}function I(N){if(--N.usedTimes===0){let V=F.indexOf(N);F[V]=F[F.length-1],F.pop(),j.delete(N.cacheKey),N.destroy()}}function L(N){k.remove(N)}function R(){k.dispose()}return{getParameters:g,getProgramCacheKey:Z,getUniforms:c,acquireProgram:X,releaseProgram:I,releaseShaderCache:L,programs:F,dispose:R}}function l9(){let z=new WeakMap;function Q(U){return z.has(U)}function J(U){let k=z.get(U);if(k===void 0)k={},z.set(U,k);return k}function $(U){z.delete(U)}function D(U,k,x){z.get(U)[k]=x}function G(){z=new WeakMap}return{has:Q,get:J,remove:$,update:D,dispose:G}}function m9(z,Q){if(z.groupOrder!==Q.groupOrder)return z.groupOrder-Q.groupOrder;else if(z.renderOrder!==Q.renderOrder)return z.renderOrder-Q.renderOrder;else if(z.material.id!==Q.material.id)return z.material.id-Q.material.id;else if(z.materialVariant!==Q.materialVariant)return z.materialVariant-Q.materialVariant;else if(z.z!==Q.z)return z.z-Q.z;else return z.id-Q.id}function U1(z,Q){if(z.groupOrder!==Q.groupOrder)return z.groupOrder-Q.groupOrder;else if(z.renderOrder!==Q.renderOrder)return z.renderOrder-Q.renderOrder;else if(z.z!==Q.z)return Q.z-z.z;else return z.id-Q.id}function V1(){let z=[],Q=0,J=[],$=[],D=[];function G(){Q=0,J.length=0,$.length=0,D.length=0}function U(Y){let M=0;if(Y.isInstancedMesh)M+=2;if(Y.isSkinnedMesh)M+=1;return M}function k(Y,M,S,g,Z,q){let P=z[Q];if(P===void 0)P={id:Y.id,object:Y,geometry:M,material:S,materialVariant:U(Y),groupOrder:g,renderOrder:Y.renderOrder,z:Z,group:q},z[Q]=P;else P.id=Y.id,P.object=Y,P.geometry=M,P.material=S,P.materialVariant=U(Y),P.groupOrder=g,P.renderOrder=Y.renderOrder,P.z=Z,P.group=q;return Q++,P}function x(Y,M,S,g,Z,q,P){if(P.reversedDepth===!0)Z=-Z;let c=k(Y,M,S,g,Z,q);if(S.transmission>0)$.push(c);else if(S.transparent===!0)D.push(c);else J.push(c)}function F(Y,M,S,g,Z,q){let P=k(Y,M,S,g,Z,q);if(S.transmission>0)$.unshift(P);else if(S.transparent===!0)D.unshift(P);else J.unshift(P)}function j(Y,M){if(J.length>1)J.sort(Y||m9);if($.length>1)$.sort(M||U1);if(D.length>1)D.sort(M||U1)}function h(){for(let Y=Q,M=z.length;Y<M;Y++){let S=z[Y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:J,transmissive:$,transparent:D,init:G,push:x,unshift:F,finish:h,sort:j}}function c9(){let z=new WeakMap;function Q($,D){let G=z.get($),U;if(G===void 0)U=new V1,z.set($,[U]);else if(D>=G.length)U=new V1,G.push(U);else U=G[D];return U}function J(){z=new WeakMap}return{get:Q,dispose:J}}function n9(){let z={};return{get:function(Q){if(z[Q.id]!==void 0)return z[Q.id];let J;switch(Q.type){case"SunLight":case"DirectionalLight":J={direction:new hz,color:new ez};break;case"SpotLight":J={position:new hz,direction:new hz,color:new ez,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":J={position:new hz,color:new ez,distance:0,decay:0};break;case"HemisphereLight":J={direction:new hz,skyColor:new ez,groundColor:new ez};break;case"RectAreaLight":J={color:new ez,position:new hz,halfWidth:new hz,halfHeight:new hz};break}return z[Q.id]=J,J}}}function o9(){let z={};return{get:function(Q){if(z[Q.id]!==void 0)return z[Q.id];let J;switch(Q.type){case"SunLight":case"DirectionalLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IJ};break;case"SpotLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IJ};break;case"PointLight":J={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IJ,shadowCameraNear:1,shadowCameraFar:1000};break}return z[Q.id]=J,J}}}var s9=0;function i9(z,Q){return(Q.castShadow?2:0)-(z.castShadow?2:0)+(Q.map?1:0)-(z.map?1:0)}function a9(z){let Q=new n9,J=o9(),$={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let F=0;F<9;F++)$.probe.push(new hz);let D=new hz,G=new aJ,U=new aJ;function k(F){let j=0,h=0,Y=0;for(let _=0;_<9;_++)$.probe[_].set(0,0,0);let M=0,S=0,g=0,Z=0,q=0,P=0,c=0,X=0,I=0,L=0,R=0,N=0,V=0,s=0;F.sort(i9);for(let _=0,zz=F.length;_<zz;_++){let C=F[_],l=C.color,a=C.intensity,d=C.distance,Vz=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===rJ)Vz=C.shadow.map.texture;else Vz=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)j+=l.r*a,h+=l.g*a,Y+=l.b*a;else if(C.isLightProbe){for(let n=0;n<9;n++)$.probe[n].addScaledVector(C.sh.coefficients[n],a);s++}else if(C.isSunLight){let n=Q.get(C);if(n.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let t=C.shadow,e=J.get(C);e.shadowIntensity=t.intensity,e.shadowBias=t.bias,e.shadowNormalBias=t.normalBias,e.shadowRadius=t.radius,e.shadowMapSize.copy(t.mapSize).multiply(t.getFrameExtents()),$.sunShadow[S]=e,$.sunShadowMap[S]=Vz;let Sz=t.getViewportCount();for(let Lz=0;Lz<Sz;Lz++)$.sunShadowMatrix[g+Lz]=t.getMatrix(Lz),$.sunShadowCascade[g+Lz]=t._cascadeData[Lz];g+=Sz,S++}$.sun[M]=n,M++}else if(C.isDirectionalLight){let n=Q.get(C);if(n.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let t=C.shadow,e=J.get(C);e.shadowIntensity=t.intensity,e.shadowBias=t.bias,e.shadowNormalBias=t.normalBias,e.shadowRadius=t.radius,e.shadowMapSize=t.mapSize,$.directionalShadow[Z]=e,$.directionalShadowMap[Z]=Vz,$.directionalShadowMatrix[Z]=C.shadow.matrix,I++}$.directional[Z]=n,Z++}else if(C.isSpotLight){let n=Q.get(C);n.position.setFromMatrixPosition(C.matrixWorld),n.color.copy(l).multiplyScalar(a),n.distance=d,n.coneCos=Math.cos(C.angle),n.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),n.decay=C.decay,$.spot[P]=n;let t=C.shadow;if(C.map){if($.spotLightMap[N]=C.map,N++,t.updateMatrices(C),C.castShadow)V++}if($.spotLightMatrix[P]=t.matrix,C.castShadow){let e=J.get(C);e.shadowIntensity=t.intensity,e.shadowBias=t.bias,e.shadowNormalBias=t.normalBias,e.shadowRadius=t.radius,e.shadowMapSize=t.mapSize,$.spotShadow[P]=e,$.spotShadowMap[P]=Vz,R++}P++}else if(C.isRectAreaLight){let n=Q.get(C);n.color.copy(l).multiplyScalar(a),n.halfWidth.set(C.width*0.5,0,0),n.halfHeight.set(0,C.height*0.5,0),$.rectArea[c]=n,c++}else if(C.isPointLight){let n=Q.get(C);if(n.color.copy(C.color).multiplyScalar(C.intensity),n.distance=C.distance,n.decay=C.decay,C.castShadow){let t=C.shadow,e=J.get(C);e.shadowIntensity=t.intensity,e.shadowBias=t.bias,e.shadowNormalBias=t.normalBias,e.shadowRadius=t.radius,e.shadowMapSize=t.mapSize,e.shadowCameraNear=t.camera.near,e.shadowCameraFar=t.camera.far,$.pointShadow[q]=e,$.pointShadowMap[q]=Vz,$.pointShadowMatrix[q]=C.shadow.matrix,L++}$.point[q]=n,q++}else if(C.isHemisphereLight){let n=Q.get(C);n.skyColor.copy(C.color).multiplyScalar(a),n.groundColor.copy(C.groundColor).multiplyScalar(a),$.hemi[X]=n,X++}}if(c>0)if(z.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=Gz.LTC_FLOAT_1,$.rectAreaLTC2=Gz.LTC_FLOAT_2;else $.rectAreaLTC1=Gz.LTC_HALF_1,$.rectAreaLTC2=Gz.LTC_HALF_2;$.ambient[0]=j,$.ambient[1]=h,$.ambient[2]=Y;let v=$.hash;if(v.sunLength!==M||v.directionalLength!==Z||v.pointLength!==q||v.spotLength!==P||v.rectAreaLength!==c||v.hemiLength!==X||v.numSunShadows!==S||v.numDirectionalShadows!==I||v.numPointShadows!==L||v.numSpotShadows!==R||v.numSpotMaps!==N||v.numLightProbes!==s)$.sun.length=M,$.directional.length=Z,$.spot.length=P,$.rectArea.length=c,$.point.length=q,$.hemi.length=X,$.sunShadow.length=S,$.sunShadowMap.length=S,$.sunShadowMatrix.length=g,$.sunShadowCascade.length=g,$.directionalShadow.length=I,$.directionalShadowMap.length=I,$.directionalShadowMatrix.length=I,$.pointShadow.length=L,$.pointShadowMap.length=L,$.pointShadowMatrix.length=L,$.spotShadow.length=R,$.spotShadowMap.length=R,$.spotLightMatrix.length=R+N-V,$.spotLightMap.length=N,$.numSpotLightShadowsWithMaps=V,$.numLightProbes=s,v.sunLength=M,v.directionalLength=Z,v.pointLength=q,v.spotLength=P,v.rectAreaLength=c,v.hemiLength=X,v.numSunShadows=S,v.numDirectionalShadows=I,v.numPointShadows=L,v.numSpotShadows=R,v.numSpotMaps=N,v.numLightProbes=s,$.version=s9++}function x(F,j){let h=0,Y=0,M=0,S=0,g=0,Z=0,q=j.matrixWorldInverse;for(let P=0,c=F.length;P<c;P++){let X=F[P];if(X.isSunLight){let I=$.sun[h];I.direction.setFromMatrixPosition(X.matrixWorld),I.direction.transformDirection(q),h++}else if(X.isDirectionalLight){let I=$.directional[Y];I.direction.setFromMatrixPosition(X.matrixWorld),D.setFromMatrixPosition(X.target.matrixWorld),I.direction.sub(D),I.direction.transformDirection(q),Y++}else if(X.isSpotLight){let I=$.spot[S];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(q),I.direction.setFromMatrixPosition(X.matrixWorld),D.setFromMatrixPosition(X.target.matrixWorld),I.direction.sub(D),I.direction.transformDirection(q),S++}else if(X.isRectAreaLight){let I=$.rectArea[g];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(q),U.identity(),G.copy(X.matrixWorld),G.premultiply(q),U.extractRotation(G),I.halfWidth.set(X.width*0.5,0,0),I.halfHeight.set(0,X.height*0.5,0),I.halfWidth.applyMatrix4(U),I.halfHeight.applyMatrix4(U),g++}else if(X.isPointLight){let I=$.point[M];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(q),M++}else if(X.isHemisphereLight){let I=$.hemi[Z];I.direction.setFromMatrixPosition(X.matrixWorld),I.direction.transformDirection(q),Z++}}}return{setup:k,setupView:x,state:$}}function Y1(z){let Q=new a9(z),J=[],$=[],D=[];function G(Y){h.camera=Y,J.length=0,$.length=0,D.length=0}function U(Y){J.push(Y)}function k(Y){$.push(Y)}function x(Y){D.push(Y)}function F(){Q.setup(J)}function j(Y){Q.setupView(J,Y)}let h={lightsArray:J,shadowsArray:$,lightProbeGridArray:D,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:G,state:h,setupLights:F,setupLightsView:j,pushLight:U,pushShadow:k,pushLightProbeGrid:x}}function t9(z){let Q=new WeakMap;function J(D,G=0){let U=Q.get(D),k;if(U===void 0)k=new Y1(z),Q.set(D,[k]);else if(G>=U.length)k=new Y1(z),U.push(k);else k=U[G];return k}function $(){Q=new WeakMap}return{get:J,dispose:$}}var r9=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e9=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z$=[new hz(1,0,0),new hz(-1,0,0),new hz(0,1,0),new hz(0,-1,0),new hz(0,0,1),new hz(0,0,-1)],J$=[new hz(0,-1,0),new hz(0,-1,0),new hz(0,0,1),new hz(0,0,-1),new hz(0,-1,0),new hz(0,-1,0)],X1=new aJ,$Q=new hz,dQ=new hz;function Q$(z,Q,J){let $=new v1,D=new IJ,G=new IJ,U=new kJ,k=new E2,x=new A2,F={},j=J.maxTextureSize,h={[BQ]:EJ,[EJ]:BQ,[RJ]:RJ},Y=new TJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new IJ},radius:{value:4}},vertexShader:r9,fragmentShader:e9}),M=Y.clone();M.defines.HORIZONTAL_PASS=1;let S=new OQ;S.setAttribute("position",new uQ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let g=new fJ(S,Y),Z=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kQ;let q=this.type;this.render=function(L,R,N){if(Z.enabled===!1)return;if(Z.autoUpdate===!1&&Z.needsUpdate===!1)return;if(L.length===0)return;if(this.type===O2)mz("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kQ;let V=z.getRenderTarget(),s=z.getActiveCubeFace(),v=z.getActiveMipmapLevel(),_=z.state;if(_.setBlending(vJ),_.buffers.depth.getReversed()===!0)_.buffers.color.setClear(0,0,0,0);else _.buffers.color.setClear(1,1,1,1);_.buffers.depth.setTest(!0),_.setScissorTest(!1);let zz=q!==this.type;if(zz)R.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((l)=>l.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,l=L.length;C<l;C++){let a=L[C],d=a.shadow;if(d===void 0){mz("WebGLShadowMap:",a,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;D.copy(d.mapSize);let Vz=d.getFrameExtents();if(D.multiply(Vz),G.copy(d.mapSize),D.x>j||D.y>j){if(D.x>j)G.x=Math.floor(j/Vz.x),D.x=G.x*Vz.x,d.mapSize.x=G.x;if(D.y>j)G.y=Math.floor(j/Vz.y),D.y=G.y*Vz.y,d.mapSize.y=G.y}let n=z.state.buffers.depth.getReversed();if(d.camera._reversedDepth=n,d.map===null||zz===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===KQ){if(a.isPointLight){mz("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new OJ(D.x,D.y,{format:rJ,type:hJ,minFilter:HJ,magFilter:HJ,generateMipmaps:!1}),d.map.texture.name=a.name+".shadowMap",d.map.depthTexture=new HQ(D.x,D.y,bJ),d.map.depthTexture.name=a.name+".shadowMapDepth",d.map.depthTexture.format=eJ,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=uJ,d.map.depthTexture.magFilter=uJ}else{if(a.isPointLight)d.map=new tQ(D.x),d.map.depthTexture=new F2(D.x,gJ);else d.map=new OJ(D.x,D.y),d.map.depthTexture=new HQ(D.x,D.y,gJ);if(d.map.depthTexture.name=a.name+".shadowMap",d.map.depthTexture.format=eJ,this.type===kQ)d.map.depthTexture.compareFunction=n?iQ:aQ,d.map.depthTexture.minFilter=HJ,d.map.depthTexture.magFilter=HJ;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=uJ,d.map.depthTexture.magFilter=uJ}d.camera.updateProjectionMatrix()}if(d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==D.x||d.map.height!==D.y))d.map.setSize(D.x,D.y);let t=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();if(a.isPointLight!==!0)d.updateMatrices(a,N);for(let e=0;e<t;e++){let Sz=d.getCamera(e);if(a.isPointLight){let{camera:Lz,matrix:$J}=d,Tz=a.distance||Lz.far;if(Tz!==Lz.far)Lz.far=Tz,Lz.updateProjectionMatrix();$Q.setFromMatrixPosition(a.matrixWorld),Lz.position.copy($Q),dQ.copy(Lz.position),dQ.add(z$[e]),Lz.up.copy(J$[e]),Lz.lookAt(dQ),Lz.updateMatrixWorld(),$J.makeTranslation(-$Q.x,-$Q.y,-$Q.z),X1.multiplyMatrices(Lz.projectionMatrix,Lz.matrixWorldInverse),d._frustum.setFromProjectionMatrix(X1,Lz.coordinateSystem,Lz.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)z.setRenderTarget(d.map,e),z.clear();else{if(e===0)z.setRenderTarget(d.map),z.clear();let Lz=d.getViewport(e);U.set(G.x*Lz.x,G.y*Lz.y,G.x*Lz.z,G.y*Lz.w),_.viewport(U)}$=d.getFrustum(e),X(R,N,Sz,a,this.type)}if(d.isPointLightShadow!==!0&&this.type===KQ)P(d,N);d.needsUpdate=!1}q=this.type,Z.needsUpdate=!1,z.setRenderTarget(V,s,v)};function P(L,R){let N=Q.update(g);if(Y.defines.VSM_SAMPLES!==L.blurSamples)Y.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,Y.needsUpdate=!0,M.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new OJ(D.x,D.y,{format:rJ,type:hJ});else if(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)L.mapPass.setSize(L.map.width,L.map.height);Y.uniforms.shadow_pass.value=L.map.depthTexture,Y.uniforms.resolution.value.set(L.map.width,L.map.height),Y.uniforms.radius.value=L.radius,z.setRenderTarget(L.mapPass),z.clear(),z.renderBufferDirect(R,null,N,Y,g,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,z.setRenderTarget(L.map),z.clear(),z.renderBufferDirect(R,null,N,M,g,null)}function c(L,R,N,V){let s=null,v=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(v!==void 0)s=v;else if(s=N.isPointLight===!0?x:k,z.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let _=s.uuid,zz=R.uuid,C=F[_];if(C===void 0)C={},F[_]=C;let l=C[zz];if(l===void 0)l=s.clone(),C[zz]=l,R.addEventListener("dispose",I);s=l}if(s.visible=R.visible,s.wireframe=R.wireframe,V===KQ)s.side=R.shadowSide!==null?R.shadowSide:R.side;else s.side=R.shadowSide!==null?R.shadowSide:h[R.side];if(s.alphaMap=R.alphaMap,s.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,s.map=R.map,s.clipShadows=R.clipShadows,s.clippingPlanes=R.clippingPlanes,s.clipIntersection=R.clipIntersection,s.displacementMap=R.displacementMap,s.displacementScale=R.displacementScale,s.displacementBias=R.displacementBias,s.wireframeLinewidth=R.wireframeLinewidth,s.linewidth=R.linewidth,N.isPointLight===!0&&s.isMeshDistanceMaterial===!0){let _=z.properties.get(s);_.light=N}return s}function X(L,R,N,V,s){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&s===KQ)&&(!L.frustumCulled||L.intersectsFrustum($))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);let zz=Q.update(L),C=L.material;if(Array.isArray(C)){let l=zz.groups;for(let a=0,d=l.length;a<d;a++){let Vz=l[a],n=C[Vz.materialIndex];if(n&&n.visible){let t=c(L,n,V,s);L.onBeforeShadow(z,L,R,N,zz,t,Vz),z.renderBufferDirect(N,null,zz,t,L,Vz),L.onAfterShadow(z,L,R,N,zz,t,Vz)}}}else if(C.visible){let l=c(L,C,V,s);L.onBeforeShadow(z,L,R,N,zz,l,null),z.renderBufferDirect(N,null,zz,l,L,null),L.onAfterShadow(z,L,R,N,zz,l,null)}}}let _=L.children;for(let zz=0,C=_.length;zz<C;zz++)X(_[zz],R,N,V,s)}function I(L){L.target.removeEventListener("dispose",I);for(let N in F){let V=F[N],s=L.target.uuid;if(s in V)V[s].dispose(),delete V[s]}}}function $$(z,Q){function J(){let O=!1,Kz=new kJ,p=null,Wz=new kJ(0,0,0,0);return{setMask:function(Yz){if(p!==Yz&&!O)z.colorMask(Yz,Yz,Yz,Yz),p=Yz},setLocked:function(Yz){O=Yz},setClear:function(Yz,o,Nz,Cz,oz){if(oz===!0)Yz*=Cz,o*=Cz,Nz*=Cz;if(Kz.set(Yz,o,Nz,Cz),Wz.equals(Kz)===!1)z.clearColor(Yz,o,Nz,Cz),Wz.copy(Kz)},reset:function(){O=!1,p=null,Wz.set(-1,0,0,0)}}}function $(){let O=!1,Kz=!1,p=null,Wz=null,Yz=null;return{setReversed:function(o){if(Kz!==o){let Nz=Q.get("EXT_clip_control");if(o)Nz.clipControlEXT(Nz.LOWER_LEFT_EXT,Nz.ZERO_TO_ONE_EXT);else Nz.clipControlEXT(Nz.LOWER_LEFT_EXT,Nz.NEGATIVE_ONE_TO_ONE_EXT);Kz=o;let Cz=Yz;Yz=null,this.setClear(Cz)}},getReversed:function(){return Kz},setTest:function(o){if(o)$z(z.DEPTH_TEST);else yz(z.DEPTH_TEST)},setMask:function(o){if(p!==o&&!O)z.depthMask(o),p=o},setFunc:function(o){if(Kz)o=a2[o];if(Wz!==o){switch(o){case n2:z.depthFunc(z.NEVER);break;case c2:z.depthFunc(z.ALWAYS);break;case m2:z.depthFunc(z.LESS);break;case Z0:z.depthFunc(z.LEQUAL);break;case l2:z.depthFunc(z.EQUAL);break;case g2:z.depthFunc(z.GEQUAL);break;case u2:z.depthFunc(z.GREATER);break;case p2:z.depthFunc(z.NOTEQUAL);break;default:z.depthFunc(z.LEQUAL)}Wz=o}},setLocked:function(o){O=o},setClear:function(o){if(Yz!==o){if(Yz=o,Kz)o=1-o;z.clearDepth(o)}},reset:function(){O=!1,p=null,Wz=null,Yz=null,Kz=!1}}}function D(){let O=!1,Kz=null,p=null,Wz=null,Yz=null,o=null,Nz=null,Cz=null,oz=null;return{setTest:function(uz){if(!O)if(uz)$z(z.STENCIL_TEST);else yz(z.STENCIL_TEST)},setMask:function(uz){if(Kz!==uz&&!O)z.stencilMask(uz),Kz=uz},setFunc:function(uz,FJ,SJ){if(p!==uz||Wz!==FJ||Yz!==SJ)z.stencilFunc(uz,FJ,SJ),p=uz,Wz=FJ,Yz=SJ},setOp:function(uz,FJ,SJ){if(o!==uz||Nz!==FJ||Cz!==SJ)z.stencilOp(uz,FJ,SJ),o=uz,Nz=FJ,Cz=SJ},setLocked:function(uz){O=uz},setClear:function(uz){if(oz!==uz)z.clearStencil(uz),oz=uz},reset:function(){O=!1,Kz=null,p=null,Wz=null,Yz=null,o=null,Nz=null,Cz=null,oz=null}}}let G=new J,U=new $,k=new D,x=new WeakMap,F=new WeakMap,j={},h={},Y={},M=new WeakMap,S=[],g=null,Z=!1,q=null,P=null,c=null,X=null,I=null,L=null,R=null,N=new ez(0,0,0),V=0,s=!1,v=null,_=null,zz=null,C=null,l=null,a=z.getParameter(z.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,Vz=0,n=z.getParameter(z.VERSION);if(n.indexOf("WebGL")!==-1)Vz=parseFloat(/^WebGL (\d)/.exec(n)[1]),d=Vz>=1;else if(n.indexOf("OpenGL ES")!==-1)Vz=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),d=Vz>=2;let t=null,e={},Sz=z.getParameter(z.SCISSOR_BOX),Lz=z.getParameter(z.VIEWPORT),$J=new kJ().fromArray(Sz),Tz=new kJ().fromArray(Lz);function u(O,Kz,p,Wz){let Yz=new Uint8Array(4),o=z.createTexture();z.bindTexture(O,o),z.texParameteri(O,z.TEXTURE_MIN_FILTER,z.NEAREST),z.texParameteri(O,z.TEXTURE_MAG_FILTER,z.NEAREST);for(let Nz=0;Nz<p;Nz++)if(O===z.TEXTURE_3D||O===z.TEXTURE_2D_ARRAY)z.texImage3D(Kz,0,z.RGBA,1,1,Wz,0,z.RGBA,z.UNSIGNED_BYTE,Yz);else z.texImage2D(Kz+Nz,0,z.RGBA,1,1,0,z.RGBA,z.UNSIGNED_BYTE,Yz);return o}let Qz={};Qz[z.TEXTURE_2D]=u(z.TEXTURE_2D,z.TEXTURE_2D,1),Qz[z.TEXTURE_CUBE_MAP]=u(z.TEXTURE_CUBE_MAP,z.TEXTURE_CUBE_MAP_POSITIVE_X,6),Qz[z.TEXTURE_2D_ARRAY]=u(z.TEXTURE_2D_ARRAY,z.TEXTURE_2D_ARRAY,1,1),Qz[z.TEXTURE_3D]=u(z.TEXTURE_3D,z.TEXTURE_3D,1,1),G.setClear(0,0,0,1),U.setClear(1),k.setClear(0),$z(z.DEPTH_TEST),U.setFunc(Z0),DJ(!1),az(U0),$z(z.CULL_FACE),lz(vJ);function $z(O){if(j[O]!==!0)z.enable(O),j[O]=!0}function yz(O){if(j[O]!==!1)z.disable(O),j[O]=!1}function wz(O,Kz){if(Y[O]!==Kz){if(z.bindFramebuffer(O,Kz),Y[O]=Kz,O===z.DRAW_FRAMEBUFFER)Y[z.FRAMEBUFFER]=Kz;if(O===z.FRAMEBUFFER)Y[z.DRAW_FRAMEBUFFER]=Kz;return!0}return!1}function Mz(O,Kz){let p=S,Wz=!1;if(O){if(p=M.get(Kz),p===void 0)p=[],M.set(Kz,p);let Yz=O.textures;if(p.length!==Yz.length||p[0]!==z.COLOR_ATTACHMENT0){for(let o=0,Nz=Yz.length;o<Nz;o++)p[o]=z.COLOR_ATTACHMENT0+o;p.length=Yz.length,Wz=!0}}else if(p[0]!==z.BACK)p[0]=z.BACK,Wz=!0;if(Wz)z.drawBuffers(p)}function WJ(O){if(g!==O)return z.useProgram(O),g=O,!0;return!1}let fz={[JQ]:z.FUNC_ADD,[L2]:z.FUNC_SUBTRACT,[M2]:z.FUNC_REVERSE_SUBTRACT};fz[t2]=z.MIN,fz[r2]=z.MAX;let jz={[d2]:z.ZERO,[b2]:z.ONE,[_2]:z.SRC_COLOR,[x2]:z.SRC_ALPHA,[j2]:z.SRC_ALPHA_SATURATE,[h2]:z.DST_COLOR,[T2]:z.DST_ALPHA,[f2]:z.ONE_MINUS_SRC_COLOR,[v2]:z.ONE_MINUS_SRC_ALPHA,[P2]:z.ONE_MINUS_DST_COLOR,[R2]:z.ONE_MINUS_DST_ALPHA,[S2]:z.CONSTANT_COLOR,[C2]:z.ONE_MINUS_CONSTANT_COLOR,[w2]:z.CONSTANT_ALPHA,[y2]:z.ONE_MINUS_CONSTANT_ALPHA};function lz(O,Kz,p,Wz,Yz,o,Nz,Cz,oz,uz){if(O===vJ){if(Z===!0)yz(z.BLEND),Z=!1;return}if(Z===!1)$z(z.BLEND),Z=!0;if(O!==i2){if(O!==q||uz!==s){if(P!==JQ||I!==JQ)z.blendEquation(z.FUNC_ADD),P=JQ,I=JQ;if(uz)switch(O){case IQ:z.blendFuncSeparate(z.ONE,z.ONE_MINUS_SRC_ALPHA,z.ONE,z.ONE_MINUS_SRC_ALPHA);break;case X0:z.blendFunc(z.ONE,z.ONE);break;case Y0:z.blendFuncSeparate(z.ZERO,z.ONE_MINUS_SRC_COLOR,z.ZERO,z.ONE);break;case V0:z.blendFuncSeparate(z.DST_COLOR,z.ONE_MINUS_SRC_ALPHA,z.ZERO,z.ONE);break;default:rz("WebGLState: Invalid blending: ",O);break}else switch(O){case IQ:z.blendFuncSeparate(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA,z.ONE,z.ONE_MINUS_SRC_ALPHA);break;case X0:z.blendFuncSeparate(z.SRC_ALPHA,z.ONE,z.ONE,z.ONE);break;case Y0:rz("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case V0:rz("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rz("WebGLState: Invalid blending: ",O);break}c=null,X=null,L=null,R=null,N.set(0,0,0),V=0,q=O,s=uz}return}if(Yz=Yz||Kz,o=o||p,Nz=Nz||Wz,Kz!==P||Yz!==I)z.blendEquationSeparate(fz[Kz],fz[Yz]),P=Kz,I=Yz;if(p!==c||Wz!==X||o!==L||Nz!==R)z.blendFuncSeparate(jz[p],jz[Wz],jz[o],jz[Nz]),c=p,X=Wz,L=o,R=Nz;if(Cz.equals(N)===!1||oz!==V)z.blendColor(Cz.r,Cz.g,Cz.b,oz),N.copy(Cz),V=oz;q=O,s=!1}function xz(O,Kz){O.side===RJ?yz(z.CULL_FACE):$z(z.CULL_FACE);let p=O.side===EJ;if(Kz)p=!p;DJ(p),O.blending===IQ&&O.transparent===!1?lz(vJ):lz(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),U.setFunc(O.depthFunc),U.setTest(O.depthTest),U.setMask(O.depthWrite),G.setMask(O.colorWrite);let Wz=O.stencilWrite;if(k.setTest(Wz),Wz)k.setMask(O.stencilWriteMask),k.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),k.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);qJ(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$z(z.SAMPLE_ALPHA_TO_COVERAGE):yz(z.SAMPLE_ALPHA_TO_COVERAGE)}function DJ(O){if(v!==O){if(O)z.frontFace(z.CW);else z.frontFace(z.CCW);v=O}}function az(O){if(O!==o2){if($z(z.CULL_FACE),O!==_)if(O===U0)z.cullFace(z.BACK);else if(O===s2)z.cullFace(z.FRONT);else z.cullFace(z.FRONT_AND_BACK)}else yz(z.CULL_FACE);_=O}function VJ(O){if(O!==zz){if(d)z.lineWidth(O);zz=O}}function qJ(O,Kz,p){if(O){if($z(z.POLYGON_OFFSET_FILL),C!==Kz||l!==p){if(C=Kz,l=p,U.getReversed())Kz=-Kz;z.polygonOffset(Kz,p)}}else yz(z.POLYGON_OFFSET_FILL)}function BJ(O){if(O)$z(z.SCISSOR_TEST);else yz(z.SCISSOR_TEST)}function E(O){if(O===void 0)O=z.TEXTURE0+a-1;if(t!==O)z.activeTexture(O),t=O}function YJ(O,Kz,p){if(p===void 0)if(t===null)p=z.TEXTURE0+a-1;else p=t;let Wz=e[p];if(Wz===void 0)Wz={type:void 0,texture:void 0},e[p]=Wz;if(Wz.type!==O||Wz.texture!==Kz){if(t!==p)z.activeTexture(p),t=p;z.bindTexture(O,Kz||Qz[O]),Wz.type=O,Wz.texture=Kz}}function pz(){let O=e[t];if(O!==void 0&&O.type!==void 0)z.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function zJ(){try{z.compressedTexImage2D(...arguments)}catch(O){rz("WebGLState:",O)}}function B(){try{z.compressedTexImage3D(...arguments)}catch(O){rz("WebGLState:",O)}}function K(){try{z.texSubImage2D(...arguments)}catch(O){rz("WebGLState:",O)}}function H(){try{z.texSubImage3D(...arguments)}catch(O){rz("WebGLState:",O)}}function f(){try{z.compressedTexSubImage2D(...arguments)}catch(O){rz("WebGLState:",O)}}function i(){try{z.compressedTexSubImage3D(...arguments)}catch(O){rz("WebGLState:",O)}}function Jz(){try{z.texStorage2D(...arguments)}catch(O){rz("WebGLState:",O)}}function qz(){try{z.texStorage3D(...arguments)}catch(O){rz("WebGLState:",O)}}function b(){try{z.texImage2D(...arguments)}catch(O){rz("WebGLState:",O)}}function m(){try{z.texImage3D(...arguments)}catch(O){rz("WebGLState:",O)}}function Uz(O){if(h[O]!==void 0)return h[O];else return z.getParameter(O)}function Az(O,Kz){if(h[O]!==Kz)z.pixelStorei(O,Kz),h[O]=Kz}function Bz(O){if($J.equals(O)===!1)z.scissor(O.x,O.y,O.z,O.w),$J.copy(O)}function r(O){if(Tz.equals(O)===!1)z.viewport(O.x,O.y,O.z,O.w),Tz.copy(O)}function Oz(O,Kz){let p=F.get(Kz);if(p===void 0)p=new WeakMap,F.set(Kz,p);let Wz=p.get(O);if(Wz===void 0)Wz=z.getUniformBlockIndex(Kz,O.name),p.set(O,Wz)}function Fz(O,Kz){let Wz=F.get(Kz).get(O);if(x.get(Kz)!==Wz)z.uniformBlockBinding(Kz,Wz,O.__bindingPointIndex),x.set(Kz,Wz)}function dz(){z.disable(z.BLEND),z.disable(z.CULL_FACE),z.disable(z.DEPTH_TEST),z.disable(z.POLYGON_OFFSET_FILL),z.disable(z.SCISSOR_TEST),z.disable(z.STENCIL_TEST),z.disable(z.SAMPLE_ALPHA_TO_COVERAGE),z.blendEquation(z.FUNC_ADD),z.blendFunc(z.ONE,z.ZERO),z.blendFuncSeparate(z.ONE,z.ZERO,z.ONE,z.ZERO),z.blendColor(0,0,0,0),z.colorMask(!0,!0,!0,!0),z.clearColor(0,0,0,0),z.depthMask(!0),z.depthFunc(z.LESS),U.setReversed(!1),z.clearDepth(1),z.stencilMask(4294967295),z.stencilFunc(z.ALWAYS,0,4294967295),z.stencilOp(z.KEEP,z.KEEP,z.KEEP),z.clearStencil(0),z.cullFace(z.BACK),z.frontFace(z.CCW),z.polygonOffset(0,0),z.activeTexture(z.TEXTURE0),z.bindFramebuffer(z.FRAMEBUFFER,null),z.bindFramebuffer(z.DRAW_FRAMEBUFFER,null),z.bindFramebuffer(z.READ_FRAMEBUFFER,null),z.useProgram(null),z.lineWidth(1),z.scissor(0,0,z.canvas.width,z.canvas.height),z.viewport(0,0,z.canvas.width,z.canvas.height),z.pixelStorei(z.PACK_ALIGNMENT,4),z.pixelStorei(z.UNPACK_ALIGNMENT,4),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,!1),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),z.pixelStorei(z.UNPACK_COLORSPACE_CONVERSION_WEBGL,z.BROWSER_DEFAULT_WEBGL),z.pixelStorei(z.PACK_ROW_LENGTH,0),z.pixelStorei(z.PACK_SKIP_PIXELS,0),z.pixelStorei(z.PACK_SKIP_ROWS,0),z.pixelStorei(z.UNPACK_ROW_LENGTH,0),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,0),z.pixelStorei(z.UNPACK_SKIP_PIXELS,0),z.pixelStorei(z.UNPACK_SKIP_ROWS,0),z.pixelStorei(z.UNPACK_SKIP_IMAGES,0),j={},h={},t=null,e={},Y={},M=new WeakMap,S=[],g=null,Z=!1,q=null,P=null,c=null,X=null,I=null,L=null,R=null,N=new ez(0,0,0),V=0,s=!1,v=null,_=null,zz=null,C=null,l=null,$J.set(0,0,z.canvas.width,z.canvas.height),Tz.set(0,0,z.canvas.width,z.canvas.height),G.reset(),U.reset(),k.reset()}return{buffers:{color:G,depth:U,stencil:k},enable:$z,disable:yz,bindFramebuffer:wz,drawBuffers:Mz,useProgram:WJ,setBlending:lz,setMaterial:xz,setFlipSided:DJ,setCullFace:az,setLineWidth:VJ,setPolygonOffset:qJ,setScissorTest:BJ,activeTexture:E,bindTexture:YJ,unbindTexture:pz,compressedTexImage2D:zJ,compressedTexImage3D:B,texImage2D:b,texImage3D:m,pixelStorei:Az,getParameter:Uz,updateUBOMapping:Oz,uniformBlockBinding:Fz,texStorage2D:Jz,texStorage3D:qz,texSubImage2D:K,texSubImage3D:H,compressedTexSubImage2D:f,compressedTexSubImage3D:i,scissor:Bz,viewport:r,reset:dz}}function K$(z,Q,J,$,D,G,U){let k=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),F=new IJ,j=new WeakMap,h=new Set,Y,M=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function g(B,K){return S?new OffscreenCanvas(B,K):G5("canvas")}function Z(B,K,H){let f=1,i=zJ(B);if(i.width>H||i.height>H)f=H/Math.max(i.width,i.height);if(f<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let Jz=Math.floor(f*i.width),qz=Math.floor(f*i.height);if(Y===void 0)Y=g(Jz,qz);let b=K?g(Jz,qz):Y;return b.width=Jz,b.height=qz,b.getContext("2d").drawImage(B,0,0,Jz,qz),mz("WebGLRenderer: Texture has been resized from ("+i.width+"x"+i.height+") to ("+Jz+"x"+qz+")."),b}else{if("data"in B)mz("WebGLRenderer: Image in DataTexture is too big ("+i.width+"x"+i.height+").");return B}return B}function q(B){return B.generateMipmaps}function P(B){z.generateMipmap(B)}function c(B){if(B.isWebGLCubeRenderTarget)return z.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return z.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return z.TEXTURE_2D_ARRAY;return z.TEXTURE_2D}function X(B,K,H,f,i,Jz=!1){if(B!==null){if(z[B]!==void 0)return z[B];mz("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let qz;if(f){if(qz=Q.get("EXT_texture_norm16"),!qz)mz("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let b=K;if(K===z.RED){if(H===z.FLOAT)b=z.R32F;if(H===z.HALF_FLOAT)b=z.R16F;if(H===z.UNSIGNED_BYTE)b=z.R8;if(H===z.UNSIGNED_SHORT&&qz)b=qz.R16_EXT;if(H===z.SHORT&&qz)b=qz.R16_SNORM_EXT}if(K===z.RED_INTEGER){if(H===z.UNSIGNED_BYTE)b=z.R8UI;if(H===z.UNSIGNED_SHORT)b=z.R16UI;if(H===z.UNSIGNED_INT)b=z.R32UI;if(H===z.BYTE)b=z.R8I;if(H===z.SHORT)b=z.R16I;if(H===z.INT)b=z.R32I}if(K===z.RG){if(H===z.FLOAT)b=z.RG32F;if(H===z.HALF_FLOAT)b=z.RG16F;if(H===z.UNSIGNED_BYTE)b=z.RG8;if(H===z.UNSIGNED_SHORT&&qz)b=qz.RG16_EXT;if(H===z.SHORT&&qz)b=qz.RG16_SNORM_EXT}if(K===z.RG_INTEGER){if(H===z.UNSIGNED_BYTE)b=z.RG8UI;if(H===z.UNSIGNED_SHORT)b=z.RG16UI;if(H===z.UNSIGNED_INT)b=z.RG32UI;if(H===z.BYTE)b=z.RG8I;if(H===z.SHORT)b=z.RG16I;if(H===z.INT)b=z.RG32I}if(K===z.RGB_INTEGER){if(H===z.UNSIGNED_BYTE)b=z.RGB8UI;if(H===z.UNSIGNED_SHORT)b=z.RGB16UI;if(H===z.UNSIGNED_INT)b=z.RGB32UI;if(H===z.BYTE)b=z.RGB8I;if(H===z.SHORT)b=z.RGB16I;if(H===z.INT)b=z.RGB32I}if(K===z.RGBA_INTEGER){if(H===z.UNSIGNED_BYTE)b=z.RGBA8UI;if(H===z.UNSIGNED_SHORT)b=z.RGBA16UI;if(H===z.UNSIGNED_INT)b=z.RGBA32UI;if(H===z.BYTE)b=z.RGBA8I;if(H===z.SHORT)b=z.RGBA16I;if(H===z.INT)b=z.RGBA32I}if(K===z.RGB){if(H===z.UNSIGNED_SHORT&&qz)b=qz.RGB16_EXT;if(H===z.SHORT&&qz)b=qz.RGB16_SNORM_EXT;if(H===z.UNSIGNED_INT_5_9_9_9_REV)b=z.RGB9_E5;if(H===z.UNSIGNED_INT_10F_11F_11F_REV)b=z.R11F_G11F_B10F}if(K===z.RGBA){let m=Jz?P1:JJ.getTransfer(i);if(H===z.FLOAT)b=z.RGBA32F;if(H===z.HALF_FLOAT)b=z.RGBA16F;if(H===z.UNSIGNED_BYTE)b=m===iz?z.SRGB8_ALPHA8:z.RGBA8;if(H===z.UNSIGNED_SHORT&&qz)b=qz.RGBA16_EXT;if(H===z.SHORT&&qz)b=qz.RGBA16_SNORM_EXT;if(H===z.UNSIGNED_SHORT_4_4_4_4)b=z.RGBA4;if(H===z.UNSIGNED_SHORT_5_5_5_1)b=z.RGB5_A1}if(b===z.R16F||b===z.R32F||b===z.RG16F||b===z.RG32F||b===z.RGBA16F||b===z.RGBA32F)Q.get("EXT_color_buffer_float");return b}function I(B,K){let H;if(B){if(K===null||K===gJ||K===NQ)H=z.DEPTH24_STENCIL8;else if(K===bJ)H=z.DEPTH32F_STENCIL8;else if(K===EQ)H=z.DEPTH24_STENCIL8,mz("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(K===null||K===gJ||K===NQ)H=z.DEPTH_COMPONENT24;else if(K===bJ)H=z.DEPTH_COMPONENT32F;else if(K===EQ)H=z.DEPTH_COMPONENT16;return H}function L(B,K){if(q(B)===!0||B.isFramebufferTexture&&B.minFilter!==uJ&&B.minFilter!==HJ)return Math.log2(Math.max(K.width,K.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return K.mipmaps.length;else return 1}function R(B){let K=B.target;if(K.removeEventListener("dispose",R),V(K),K.isVideoTexture)j.delete(K);if(K.isHTMLTexture)h.delete(K)}function N(B){let K=B.target;K.removeEventListener("dispose",N),v(K)}function V(B){let K=$.get(B);if(K.__webglInit===void 0)return;let H=B.source,f=M.get(H);if(f){let i=f[K.__cacheKey];if(i.usedTimes--,i.usedTimes===0)s(B);if(Object.keys(f).length===0)M.delete(H)}$.remove(B)}function s(B){let K=$.get(B);z.deleteTexture(K.__webglTexture);let H=B.source,f=M.get(H);delete f[K.__cacheKey],U.memory.textures--}function v(B){let K=$.get(B);if(B.depthTexture)B.depthTexture.dispose(),$.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let f=0;f<6;f++){if(Array.isArray(K.__webglFramebuffer[f]))for(let i=0;i<K.__webglFramebuffer[f].length;i++)z.deleteFramebuffer(K.__webglFramebuffer[f][i]);else z.deleteFramebuffer(K.__webglFramebuffer[f]);if(K.__webglDepthbuffer)z.deleteRenderbuffer(K.__webglDepthbuffer[f])}else{if(Array.isArray(K.__webglFramebuffer))for(let f=0;f<K.__webglFramebuffer.length;f++)z.deleteFramebuffer(K.__webglFramebuffer[f]);else z.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer)z.deleteRenderbuffer(K.__webglDepthbuffer);if(K.__webglMultisampledFramebuffer)z.deleteFramebuffer(K.__webglMultisampledFramebuffer);if(K.__webglColorRenderbuffer){for(let f=0;f<K.__webglColorRenderbuffer.length;f++)if(K.__webglColorRenderbuffer[f])z.deleteRenderbuffer(K.__webglColorRenderbuffer[f])}if(K.__webglDepthRenderbuffer)z.deleteRenderbuffer(K.__webglDepthRenderbuffer)}let H=B.textures;for(let f=0,i=H.length;f<i;f++){let Jz=$.get(H[f]);if(Jz.__webglTexture)z.deleteTexture(Jz.__webglTexture),U.memory.textures--;$.remove(H[f])}$.remove(B)}let _=0;function zz(){_=0}function C(){return _}function l(B){_=B}function a(){let B=_;if(B>=D.maxTextures)mz("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+D.maxTextures);return _+=1,B}function d(B){let K=[];return K.push(B.wrapS),K.push(B.wrapT),K.push(B.wrapR||0),K.push(B.magFilter),K.push(B.minFilter),K.push(B.anisotropy),K.push(B.internalFormat),K.push(B.format),K.push(B.type),K.push(B.generateMipmaps),K.push(B.premultiplyAlpha),K.push(B.flipY),K.push(B.unpackAlignment),K.push(B.colorSpace),K.join()}function Vz(B,K){let H=$.get(B);if(B.isVideoTexture)YJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&H.__version!==B.version){let f=B.image;if(f===null)mz("WebGLRenderer: Texture marked for update but no image data found.");else if(f.complete===!1)mz("WebGLRenderer: Texture marked for update but image is incomplete");else{yz(H,B,K);return}}else if(B.isExternalTexture)H.__webglTexture=B.sourceTexture?B.sourceTexture:null;J.bindTexture(z.TEXTURE_2D,H.__webglTexture,z.TEXTURE0+K)}function n(B,K){let H=$.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&H.__version!==B.version){yz(H,B,K);return}else if(B.isExternalTexture)H.__webglTexture=B.sourceTexture?B.sourceTexture:null;J.bindTexture(z.TEXTURE_2D_ARRAY,H.__webglTexture,z.TEXTURE0+K)}function t(B,K){let H=$.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&H.__version!==B.version){yz(H,B,K);return}J.bindTexture(z.TEXTURE_3D,H.__webglTexture,z.TEXTURE0+K)}function e(B,K){let H=$.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&H.__version!==B.version){wz(H,B,K);return}J.bindTexture(z.TEXTURE_CUBE_MAP,H.__webglTexture,z.TEXTURE0+K)}let Sz={[z5]:z.REPEAT,[mQ]:z.CLAMP_TO_EDGE,[e2]:z.MIRRORED_REPEAT},Lz={[uJ]:z.NEAREST,[J5]:z.NEAREST_MIPMAP_NEAREST,[UQ]:z.NEAREST_MIPMAP_LINEAR,[HJ]:z.LINEAR,[SQ]:z.LINEAR_MIPMAP_NEAREST,[oJ]:z.LINEAR_MIPMAP_LINEAR},$J={[B5]:z.NEVER,[q5]:z.ALWAYS,[W5]:z.LESS,[aQ]:z.LEQUAL,[K5]:z.EQUAL,[iQ]:z.GEQUAL,[$5]:z.GREATER,[Q5]:z.NOTEQUAL};function Tz(B,K){if(K.type===bJ&&Q.has("OES_texture_float_linear")===!1&&(K.magFilter===HJ||K.magFilter===SQ||K.magFilter===UQ||K.magFilter===oJ||K.minFilter===HJ||K.minFilter===SQ||K.minFilter===UQ||K.minFilter===oJ))mz("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(z.texParameteri(B,z.TEXTURE_WRAP_S,Sz[K.wrapS]),z.texParameteri(B,z.TEXTURE_WRAP_T,Sz[K.wrapT]),B===z.TEXTURE_3D||B===z.TEXTURE_2D_ARRAY)z.texParameteri(B,z.TEXTURE_WRAP_R,Sz[K.wrapR]);if(z.texParameteri(B,z.TEXTURE_MAG_FILTER,Lz[K.magFilter]),z.texParameteri(B,z.TEXTURE_MIN_FILTER,Lz[K.minFilter]),K.compareFunction)z.texParameteri(B,z.TEXTURE_COMPARE_MODE,z.COMPARE_REF_TO_TEXTURE),z.texParameteri(B,z.TEXTURE_COMPARE_FUNC,$J[K.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(K.magFilter===uJ)return;if(K.minFilter!==UQ&&K.minFilter!==oJ)return;if(K.type===bJ&&Q.has("OES_texture_float_linear")===!1)return;if(K.anisotropy>1||$.get(K).__currentAnisotropy){let H=Q.get("EXT_texture_filter_anisotropic");z.texParameterf(B,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(K.anisotropy,D.getMaxAnisotropy())),$.get(K).__currentAnisotropy=K.anisotropy}}}function u(B,K){let H=!1;if(B.__webglInit===void 0)B.__webglInit=!0,K.addEventListener("dispose",R);let f=K.source,i=M.get(f);if(i===void 0)i={},M.set(f,i);let Jz=d(K);if(Jz!==B.__cacheKey){if(i[Jz]===void 0)i[Jz]={texture:z.createTexture(),usedTimes:0},U.memory.textures++,H=!0;i[Jz].usedTimes++;let qz=i[B.__cacheKey];if(qz!==void 0){if(i[B.__cacheKey].usedTimes--,qz.usedTimes===0)s(K)}B.__cacheKey=Jz,B.__webglTexture=i[Jz].texture}return H}function Qz(B,K,H){return Math.floor(Math.floor(B/H)/K)}function $z(B,K,H,f){let Jz=B.updateRanges;if(Jz.length===0)J.texSubImage2D(z.TEXTURE_2D,0,0,0,K.width,K.height,H,f,K.data);else{Jz.sort((Az,Bz)=>Az.start-Bz.start);let qz=0;for(let Az=1;Az<Jz.length;Az++){let Bz=Jz[qz],r=Jz[Az],Oz=Bz.start+Bz.count,Fz=Qz(r.start,K.width,4),dz=Qz(Bz.start,K.width,4);if(r.start<=Oz+1&&Fz===dz&&Qz(r.start+r.count-1,K.width,4)===Fz)Bz.count=Math.max(Bz.count,r.start+r.count-Bz.start);else++qz,Jz[qz]=r}Jz.length=qz+1;let b=J.getParameter(z.UNPACK_ROW_LENGTH),m=J.getParameter(z.UNPACK_SKIP_PIXELS),Uz=J.getParameter(z.UNPACK_SKIP_ROWS);J.pixelStorei(z.UNPACK_ROW_LENGTH,K.width);for(let Az=0,Bz=Jz.length;Az<Bz;Az++){let r=Jz[Az],Oz=Math.floor(r.start/4),Fz=Math.ceil(r.count/4),dz=Oz%K.width,O=Math.floor(Oz/K.width),Kz=Fz,p=1;J.pixelStorei(z.UNPACK_SKIP_PIXELS,dz),J.pixelStorei(z.UNPACK_SKIP_ROWS,O),J.texSubImage2D(z.TEXTURE_2D,0,dz,O,Kz,1,H,f,K.data)}B.clearUpdateRanges(),J.pixelStorei(z.UNPACK_ROW_LENGTH,b),J.pixelStorei(z.UNPACK_SKIP_PIXELS,m),J.pixelStorei(z.UNPACK_SKIP_ROWS,Uz)}}function yz(B,K,H){let f=z.TEXTURE_2D;if(K.isDataArrayTexture||K.isCompressedArrayTexture)f=z.TEXTURE_2D_ARRAY;if(K.isData3DTexture)f=z.TEXTURE_3D;let i=u(B,K),Jz=K.source;J.bindTexture(f,B.__webglTexture,z.TEXTURE0+H);let qz=$.get(Jz);if(Jz.version!==qz.__version||i===!0){if(J.activeTexture(z.TEXTURE0+H),(typeof ImageBitmap<"u"&&K.image instanceof ImageBitmap)===!1){let p=JJ.getPrimaries(JJ.workingColorSpace),Wz=K.colorSpace===nJ?null:JJ.getPrimaries(K.colorSpace),Yz=K.colorSpace===nJ||p===Wz?z.NONE:z.BROWSER_DEFAULT_WEBGL;J.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),J.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),J.pixelStorei(z.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yz)}J.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);let m=Z(K.image,!1,D.maxTextureSize);m=pz(K,m);let Uz=G.convert(K.format,K.colorSpace),Az=G.convert(K.type),Bz=X(K.internalFormat,Uz,Az,K.normalized,K.colorSpace,K.isVideoTexture);Tz(f,K);let r,Oz=K.mipmaps,Fz=K.isVideoTexture!==!0,dz=qz.__version===void 0||i===!0,O=Jz.dataReady,Kz=L(K,m);if(K.isDepthTexture){if(Bz=I(K.format===sJ,K.type),dz)if(Fz)J.texStorage2D(z.TEXTURE_2D,1,Bz,m.width,m.height);else J.texImage2D(z.TEXTURE_2D,0,Bz,m.width,m.height,0,Uz,Az,null)}else if(K.isDataTexture)if(Oz.length>0){if(Fz&&dz)J.texStorage2D(z.TEXTURE_2D,Kz,Bz,Oz[0].width,Oz[0].height);for(let p=0,Wz=Oz.length;p<Wz;p++)if(r=Oz[p],Fz){if(O)J.texSubImage2D(z.TEXTURE_2D,p,0,0,r.width,r.height,Uz,Az,r.data)}else J.texImage2D(z.TEXTURE_2D,p,Bz,r.width,r.height,0,Uz,Az,r.data);K.generateMipmaps=!1}else if(Fz){if(dz)J.texStorage2D(z.TEXTURE_2D,Kz,Bz,m.width,m.height);if(O)$z(K,m,Uz,Az)}else J.texImage2D(z.TEXTURE_2D,0,Bz,m.width,m.height,0,Uz,Az,m.data);else if(K.isCompressedTexture)if(K.isCompressedArrayTexture){if(Fz&&dz)J.texStorage3D(z.TEXTURE_2D_ARRAY,Kz,Bz,Oz[0].width,Oz[0].height,m.depth);for(let p=0,Wz=Oz.length;p<Wz;p++)if(r=Oz[p],K.format!==PJ)if(Uz!==null)if(Fz){if(O)if(K.layerUpdates.size>0){let Yz=k0(r.width,r.height,K.format,K.type);for(let o of K.layerUpdates){let Nz=r.data.subarray(o*Yz/r.data.BYTES_PER_ELEMENT,(o+1)*Yz/r.data.BYTES_PER_ELEMENT);J.compressedTexSubImage3D(z.TEXTURE_2D_ARRAY,p,0,0,o,r.width,r.height,1,Uz,Nz)}}else J.compressedTexSubImage3D(z.TEXTURE_2D_ARRAY,p,0,0,0,r.width,r.height,m.depth,Uz,r.data)}else J.compressedTexImage3D(z.TEXTURE_2D_ARRAY,p,Bz,r.width,r.height,m.depth,0,r.data,0,0);else mz("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Fz){if(O)J.texSubImage3D(z.TEXTURE_2D_ARRAY,p,0,0,0,r.width,r.height,m.depth,Uz,Az,r.data)}else J.texImage3D(z.TEXTURE_2D_ARRAY,p,Bz,r.width,r.height,m.depth,0,Uz,Az,r.data);if(K.layerUpdates.size>0)K.clearLayerUpdates()}else{if(Fz&&dz)J.texStorage2D(z.TEXTURE_2D,Kz,Bz,Oz[0].width,Oz[0].height);for(let p=0,Wz=Oz.length;p<Wz;p++)if(r=Oz[p],K.format!==PJ)if(Uz!==null)if(Fz){if(O)J.compressedTexSubImage2D(z.TEXTURE_2D,p,0,0,r.width,r.height,Uz,r.data)}else J.compressedTexImage2D(z.TEXTURE_2D,p,Bz,r.width,r.height,0,r.data);else mz("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Fz){if(O)J.texSubImage2D(z.TEXTURE_2D,p,0,0,r.width,r.height,Uz,Az,r.data)}else J.texImage2D(z.TEXTURE_2D,p,Bz,r.width,r.height,0,Uz,Az,r.data)}else if(K.isDataArrayTexture)if(Fz){if(dz)J.texStorage3D(z.TEXTURE_2D_ARRAY,Kz,Bz,m.width,m.height,m.depth);if(O)if(K.layerUpdates.size>0){let p=k0(m.width,m.height,K.format,K.type);for(let Wz of K.layerUpdates){let Yz=m.data.subarray(Wz*p/m.data.BYTES_PER_ELEMENT,(Wz+1)*p/m.data.BYTES_PER_ELEMENT);J.texSubImage3D(z.TEXTURE_2D_ARRAY,0,0,0,Wz,m.width,m.height,1,Uz,Az,Yz)}K.clearLayerUpdates()}else J.texSubImage3D(z.TEXTURE_2D_ARRAY,0,0,0,0,m.width,m.height,m.depth,Uz,Az,m.data)}else J.texImage3D(z.TEXTURE_2D_ARRAY,0,Bz,m.width,m.height,m.depth,0,Uz,Az,m.data);else if(K.isData3DTexture)if(Fz){if(dz)J.texStorage3D(z.TEXTURE_3D,Kz,Bz,m.width,m.height,m.depth);if(O)J.texSubImage3D(z.TEXTURE_3D,0,0,0,0,m.width,m.height,m.depth,Uz,Az,m.data)}else J.texImage3D(z.TEXTURE_3D,0,Bz,m.width,m.height,m.depth,0,Uz,Az,m.data);else if(K.isFramebufferTexture){if(dz)if(Fz)J.texStorage2D(z.TEXTURE_2D,Kz,Bz,m.width,m.height);else{let{width:p,height:Wz}=m;for(let Yz=0;Yz<Kz;Yz++)J.texImage2D(z.TEXTURE_2D,Yz,Bz,p,Wz,0,Uz,Az,null),p>>=1,Wz>>=1}}else if(K.isHTMLTexture){if("texElementImage2D"in z){let p=z.canvas;if(!p.hasAttribute("layoutsubtree"))p.setAttribute("layoutsubtree","true");if(m.parentNode!==p){p.appendChild(m),h.add(K),p.onpaint=(Wz)=>{let Yz=Wz.changedElements;for(let o of h)if(Yz.includes(o.image))o.needsUpdate=!0},p.requestPaint();return}if(z.texElementImage2D.length===3)z.texElementImage2D(z.TEXTURE_2D,z.RGBA8,m);else{let{RGBA:Yz,RGBA:o,UNSIGNED_BYTE:Nz}=z;z.texElementImage2D(z.TEXTURE_2D,0,Yz,o,Nz,m)}z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.LINEAR),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_S,z.CLAMP_TO_EDGE),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_T,z.CLAMP_TO_EDGE)}}else if(Oz.length>0){if(Fz&&dz){let p=zJ(Oz[0]);J.texStorage2D(z.TEXTURE_2D,Kz,Bz,p.width,p.height)}for(let p=0,Wz=Oz.length;p<Wz;p++)if(r=Oz[p],Fz){if(O)J.texSubImage2D(z.TEXTURE_2D,p,0,0,Uz,Az,r)}else J.texImage2D(z.TEXTURE_2D,p,Bz,Uz,Az,r);K.generateMipmaps=!1}else if(Fz){if(dz){let p=zJ(m);J.texStorage2D(z.TEXTURE_2D,Kz,Bz,p.width,p.height)}if(O)J.texSubImage2D(z.TEXTURE_2D,0,0,0,Uz,Az,m)}else J.texImage2D(z.TEXTURE_2D,0,Bz,Uz,Az,m);if(q(K))P(f);if(qz.__version=Jz.version,K.onUpdate)K.onUpdate(K)}B.__version=K.version}function wz(B,K,H){if(K.image.length!==6)return;let f=u(B,K),i=K.source;J.bindTexture(z.TEXTURE_CUBE_MAP,B.__webglTexture,z.TEXTURE0+H);let Jz=$.get(i);if(i.version!==Jz.__version||f===!0){J.activeTexture(z.TEXTURE0+H);let qz=JJ.getPrimaries(JJ.workingColorSpace),b=K.colorSpace===nJ?null:JJ.getPrimaries(K.colorSpace),m=K.colorSpace===nJ||qz===b?z.NONE:z.BROWSER_DEFAULT_WEBGL;J.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),J.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),J.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment),J.pixelStorei(z.UNPACK_COLORSPACE_CONVERSION_WEBGL,m);let Uz=K.isCompressedTexture||K.image[0].isCompressedTexture,Az=K.image[0]&&K.image[0].isDataTexture,Bz=[];for(let o=0;o<6;o++){if(!Uz&&!Az)Bz[o]=Z(K.image[o],!0,D.maxCubemapSize);else Bz[o]=Az?K.image[o].image:K.image[o];Bz[o]=pz(K,Bz[o])}let r=Bz[0],Oz=G.convert(K.format,K.colorSpace),Fz=G.convert(K.type),dz=X(K.internalFormat,Oz,Fz,K.normalized,K.colorSpace),O=K.isVideoTexture!==!0,Kz=Jz.__version===void 0||f===!0,p=i.dataReady,Wz=L(K,r);Tz(z.TEXTURE_CUBE_MAP,K);let Yz;if(Uz){if(O&&Kz)J.texStorage2D(z.TEXTURE_CUBE_MAP,Wz,dz,r.width,r.height);for(let o=0;o<6;o++){Yz=Bz[o].mipmaps;for(let Nz=0;Nz<Yz.length;Nz++){let Cz=Yz[Nz];if(K.format!==PJ)if(Oz!==null)if(O){if(p)J.compressedTexSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz,0,0,Cz.width,Cz.height,Oz,Cz.data)}else J.compressedTexImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz,dz,Cz.width,Cz.height,0,Cz.data);else mz("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(O){if(p)J.texSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz,0,0,Cz.width,Cz.height,Oz,Fz,Cz.data)}else J.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz,dz,Cz.width,Cz.height,0,Oz,Fz,Cz.data)}}}else{if(Yz=K.mipmaps,O&&Kz){if(Yz.length>0)Wz++;let o=zJ(Bz[0]);J.texStorage2D(z.TEXTURE_CUBE_MAP,Wz,dz,o.width,o.height)}for(let o=0;o<6;o++)if(Az){if(O){if(p)J.texSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,Bz[o].width,Bz[o].height,Oz,Fz,Bz[o].data)}else J.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,dz,Bz[o].width,Bz[o].height,0,Oz,Fz,Bz[o].data);for(let Nz=0;Nz<Yz.length;Nz++){let oz=Yz[Nz].image[o].image;if(O){if(p)J.texSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz+1,0,0,oz.width,oz.height,Oz,Fz,oz.data)}else J.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz+1,dz,oz.width,oz.height,0,Oz,Fz,oz.data)}}else{if(O){if(p)J.texSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,Oz,Fz,Bz[o])}else J.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,dz,Oz,Fz,Bz[o]);for(let Nz=0;Nz<Yz.length;Nz++){let Cz=Yz[Nz];if(O){if(p)J.texSubImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz+1,0,0,Oz,Fz,Cz.image[o])}else J.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+o,Nz+1,dz,Oz,Fz,Cz.image[o])}}}if(q(K))P(z.TEXTURE_CUBE_MAP);if(Jz.__version=i.version,K.onUpdate)K.onUpdate(K)}B.__version=K.version}function Mz(B,K,H,f,i,Jz){let qz=G.convert(H.format,H.colorSpace),b=G.convert(H.type),m=X(H.internalFormat,qz,b,H.normalized,H.colorSpace),Uz=$.get(K),Az=$.get(H);if(Az.__renderTarget=K,!Uz.__hasExternalTextures){let Bz=Math.max(1,K.width>>Jz),r=Math.max(1,K.height>>Jz);if(i===z.TEXTURE_3D||i===z.TEXTURE_2D_ARRAY)J.texImage3D(i,Jz,m,Bz,r,K.depth,0,qz,b,null);else J.texImage2D(i,Jz,m,Bz,r,0,qz,b,null)}if(J.bindFramebuffer(z.FRAMEBUFFER,B),E(K))k.framebufferTexture2DMultisampleEXT(z.FRAMEBUFFER,f,i,Az.__webglTexture,0,BJ(K));else if(i===z.TEXTURE_2D||i>=z.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=z.TEXTURE_CUBE_MAP_NEGATIVE_Z)z.framebufferTexture2D(z.FRAMEBUFFER,f,i,Az.__webglTexture,Jz);J.bindFramebuffer(z.FRAMEBUFFER,null)}function WJ(B,K,H){if(z.bindRenderbuffer(z.RENDERBUFFER,B),K.depthBuffer){let f=K.depthTexture,i=f&&f.isDepthTexture?f.type:null,Jz=I(K.stencilBuffer,i),qz=K.stencilBuffer?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT;if(E(K))k.renderbufferStorageMultisampleEXT(z.RENDERBUFFER,BJ(K),Jz,K.width,K.height);else if(H)z.renderbufferStorageMultisample(z.RENDERBUFFER,BJ(K),Jz,K.width,K.height);else z.renderbufferStorage(z.RENDERBUFFER,Jz,K.width,K.height);z.framebufferRenderbuffer(z.FRAMEBUFFER,qz,z.RENDERBUFFER,B)}else{let f=K.textures;for(let i=0;i<f.length;i++){let Jz=f[i],qz=G.convert(Jz.format,Jz.colorSpace),b=G.convert(Jz.type),m=X(Jz.internalFormat,qz,b,Jz.normalized,Jz.colorSpace);if(E(K))k.renderbufferStorageMultisampleEXT(z.RENDERBUFFER,BJ(K),m,K.width,K.height);else if(H)z.renderbufferStorageMultisample(z.RENDERBUFFER,BJ(K),m,K.width,K.height);else z.renderbufferStorage(z.RENDERBUFFER,m,K.width,K.height)}}z.bindRenderbuffer(z.RENDERBUFFER,null)}function fz(B,K,H){let f=K.isWebGLCubeRenderTarget===!0;if(J.bindFramebuffer(z.FRAMEBUFFER,B),!(K.depthTexture&&K.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let i=$.get(K.depthTexture);if(i.__renderTarget=K,!i.__webglTexture||K.depthTexture.image.width!==K.width||K.depthTexture.image.height!==K.height)K.depthTexture.image.width=K.width,K.depthTexture.image.height=K.height,K.depthTexture.needsUpdate=!0;if(f){if(i.__webglInit===void 0)i.__webglInit=!0,K.depthTexture.addEventListener("dispose",R);if(i.__webglTexture===void 0){i.__webglTexture=z.createTexture(),J.bindTexture(z.TEXTURE_CUBE_MAP,i.__webglTexture),Tz(z.TEXTURE_CUBE_MAP,K.depthTexture);let Uz=G.convert(K.depthTexture.format),Az=G.convert(K.depthTexture.type),Bz;if(K.depthTexture.format===eJ)Bz=z.DEPTH_COMPONENT24;else if(K.depthTexture.format===sJ)Bz=z.DEPTH24_STENCIL8;for(let r=0;r<6;r++)z.texImage2D(z.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,Bz,K.width,K.height,0,Uz,Az,null)}}else Vz(K.depthTexture,0);let Jz=i.__webglTexture,qz=BJ(K),b=f?z.TEXTURE_CUBE_MAP_POSITIVE_X+H:z.TEXTURE_2D,m=K.depthTexture.format===sJ?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT;if(K.depthTexture.format===eJ)if(E(K))k.framebufferTexture2DMultisampleEXT(z.FRAMEBUFFER,m,b,Jz,0,qz);else z.framebufferTexture2D(z.FRAMEBUFFER,m,b,Jz,0);else if(K.depthTexture.format===sJ)if(E(K))k.framebufferTexture2DMultisampleEXT(z.FRAMEBUFFER,m,b,Jz,0,qz);else z.framebufferTexture2D(z.FRAMEBUFFER,m,b,Jz,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jz(B){let K=$.get(B),H=B.isWebGLCubeRenderTarget===!0;if(K.__boundDepthTexture!==B.depthTexture){let f=B.depthTexture;if(K.__depthDisposeCallback)K.__depthDisposeCallback();if(f){let i=()=>{delete K.__boundDepthTexture,delete K.__depthDisposeCallback,f.removeEventListener("dispose",i)};f.addEventListener("dispose",i),K.__depthDisposeCallback=i}K.__boundDepthTexture=f}if(B.depthTexture&&!K.__autoAllocateDepthBuffer)if(H)for(let f=0;f<6;f++)fz(K.__webglFramebuffer[f],B,f);else{let f=B.texture.mipmaps;if(f&&f.length>0)fz(K.__webglFramebuffer[0],B,0);else fz(K.__webglFramebuffer,B,0)}else if(H){K.__webglDepthbuffer=[];for(let f=0;f<6;f++)if(J.bindFramebuffer(z.FRAMEBUFFER,K.__webglFramebuffer[f]),K.__webglDepthbuffer[f]===void 0)K.__webglDepthbuffer[f]=z.createRenderbuffer(),WJ(K.__webglDepthbuffer[f],B,!1);else{let i=B.stencilBuffer?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT,Jz=K.__webglDepthbuffer[f];z.bindRenderbuffer(z.RENDERBUFFER,Jz),z.framebufferRenderbuffer(z.FRAMEBUFFER,i,z.RENDERBUFFER,Jz)}}else{let f=B.texture.mipmaps;if(f&&f.length>0)J.bindFramebuffer(z.FRAMEBUFFER,K.__webglFramebuffer[0]);else J.bindFramebuffer(z.FRAMEBUFFER,K.__webglFramebuffer);if(K.__webglDepthbuffer===void 0)K.__webglDepthbuffer=z.createRenderbuffer(),WJ(K.__webglDepthbuffer,B,!1);else{let i=B.stencilBuffer?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT,Jz=K.__webglDepthbuffer;z.bindRenderbuffer(z.RENDERBUFFER,Jz),z.framebufferRenderbuffer(z.FRAMEBUFFER,i,z.RENDERBUFFER,Jz)}}J.bindFramebuffer(z.FRAMEBUFFER,null)}function lz(B,K,H){let f=$.get(B);if(K!==void 0)Mz(f.__webglFramebuffer,B,B.texture,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,0);if(H!==void 0)jz(B)}function xz(B){let K=B.texture,H=$.get(B),f=$.get(K);B.addEventListener("dispose",N);let i=B.textures,Jz=B.isWebGLCubeRenderTarget===!0,qz=i.length>1;if(!qz){if(f.__webglTexture===void 0)f.__webglTexture=z.createTexture();f.__version=K.version,U.memory.textures++}if(Jz){H.__webglFramebuffer=[];for(let b=0;b<6;b++)if(K.mipmaps&&K.mipmaps.length>0){H.__webglFramebuffer[b]=[];for(let m=0;m<K.mipmaps.length;m++)H.__webglFramebuffer[b][m]=z.createFramebuffer()}else H.__webglFramebuffer[b]=z.createFramebuffer()}else{if(K.mipmaps&&K.mipmaps.length>0){H.__webglFramebuffer=[];for(let b=0;b<K.mipmaps.length;b++)H.__webglFramebuffer[b]=z.createFramebuffer()}else H.__webglFramebuffer=z.createFramebuffer();if(qz)for(let b=0,m=i.length;b<m;b++){let Uz=$.get(i[b]);if(Uz.__webglTexture===void 0)Uz.__webglTexture=z.createTexture(),U.memory.textures++}if(B.samples>0&&E(B)===!1){H.__webglMultisampledFramebuffer=z.createFramebuffer(),H.__webglColorRenderbuffer=[],J.bindFramebuffer(z.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let b=0;b<i.length;b++){let m=i[b];H.__webglColorRenderbuffer[b]=z.createRenderbuffer(),z.bindRenderbuffer(z.RENDERBUFFER,H.__webglColorRenderbuffer[b]);let Uz=G.convert(m.format,m.colorSpace),Az=G.convert(m.type),Bz=X(m.internalFormat,Uz,Az,m.normalized,m.colorSpace,B.isXRRenderTarget===!0),r=BJ(B);z.renderbufferStorageMultisample(z.RENDERBUFFER,r,Bz,B.width,B.height),z.framebufferRenderbuffer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+b,z.RENDERBUFFER,H.__webglColorRenderbuffer[b])}if(z.bindRenderbuffer(z.RENDERBUFFER,null),B.depthBuffer)H.__webglDepthRenderbuffer=z.createRenderbuffer(),WJ(H.__webglDepthRenderbuffer,B,!0);J.bindFramebuffer(z.FRAMEBUFFER,null)}}if(Jz){J.bindTexture(z.TEXTURE_CUBE_MAP,f.__webglTexture),Tz(z.TEXTURE_CUBE_MAP,K);for(let b=0;b<6;b++)if(K.mipmaps&&K.mipmaps.length>0)for(let m=0;m<K.mipmaps.length;m++)Mz(H.__webglFramebuffer[b][m],B,K,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+b,m);else Mz(H.__webglFramebuffer[b],B,K,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);if(q(K))P(z.TEXTURE_CUBE_MAP);J.unbindTexture()}else if(qz){for(let b=0,m=i.length;b<m;b++){let Uz=i[b],Az=$.get(Uz),Bz=z.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)Bz=B.isWebGL3DRenderTarget?z.TEXTURE_3D:z.TEXTURE_2D_ARRAY;if(J.bindTexture(Bz,Az.__webglTexture),Tz(Bz,Uz),Mz(H.__webglFramebuffer,B,Uz,z.COLOR_ATTACHMENT0+b,Bz,0),q(Uz))P(Bz)}J.unbindTexture()}else{let b=z.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)b=B.isWebGL3DRenderTarget?z.TEXTURE_3D:z.TEXTURE_2D_ARRAY;if(J.bindTexture(b,f.__webglTexture),Tz(b,K),K.mipmaps&&K.mipmaps.length>0)for(let m=0;m<K.mipmaps.length;m++)Mz(H.__webglFramebuffer[m],B,K,z.COLOR_ATTACHMENT0,b,m);else Mz(H.__webglFramebuffer,B,K,z.COLOR_ATTACHMENT0,b,0);if(q(K))P(b);J.unbindTexture()}if(B.depthBuffer)jz(B)}function DJ(B){let K=B.textures;for(let H=0,f=K.length;H<f;H++){let i=K[H];if(q(i)){let Jz=c(B),qz=$.get(i).__webglTexture;J.bindTexture(Jz,qz),P(Jz),J.unbindTexture()}}}let az=[],VJ=[];function qJ(B){if(B.samples>0){if(E(B)===!1){let{textures:K,width:H,height:f}=B,i=z.COLOR_BUFFER_BIT,Jz=B.stencilBuffer?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT,qz=$.get(B),b=K.length>1;if(b)for(let Uz=0;Uz<K.length;Uz++)J.bindFramebuffer(z.FRAMEBUFFER,qz.__webglMultisampledFramebuffer),z.framebufferRenderbuffer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Uz,z.RENDERBUFFER,null),J.bindFramebuffer(z.FRAMEBUFFER,qz.__webglFramebuffer),z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0+Uz,z.TEXTURE_2D,null,0);J.bindFramebuffer(z.READ_FRAMEBUFFER,qz.__webglMultisampledFramebuffer);let m=B.texture.mipmaps;if(m&&m.length>0)J.bindFramebuffer(z.DRAW_FRAMEBUFFER,qz.__webglFramebuffer[0]);else J.bindFramebuffer(z.DRAW_FRAMEBUFFER,qz.__webglFramebuffer);for(let Uz=0;Uz<K.length;Uz++){if(B.resolveDepthBuffer){if(B.depthBuffer)i|=z.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)i|=z.STENCIL_BUFFER_BIT}if(b){z.framebufferRenderbuffer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.RENDERBUFFER,qz.__webglColorRenderbuffer[Uz]);let Az=$.get(K[Uz]).__webglTexture;z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Az,0)}if(z.blitFramebuffer(0,0,H,f,0,0,H,f,i,z.NEAREST),x===!0){if(az.length=0,VJ.length=0,az.push(z.COLOR_ATTACHMENT0+Uz),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1)az.push(Jz),VJ.push(Jz),z.invalidateFramebuffer(z.DRAW_FRAMEBUFFER,VJ);z.invalidateFramebuffer(z.READ_FRAMEBUFFER,az)}}if(J.bindFramebuffer(z.READ_FRAMEBUFFER,null),J.bindFramebuffer(z.DRAW_FRAMEBUFFER,null),b)for(let Uz=0;Uz<K.length;Uz++){J.bindFramebuffer(z.FRAMEBUFFER,qz.__webglMultisampledFramebuffer),z.framebufferRenderbuffer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Uz,z.RENDERBUFFER,qz.__webglColorRenderbuffer[Uz]);let Az=$.get(K[Uz]).__webglTexture;J.bindFramebuffer(z.FRAMEBUFFER,qz.__webglFramebuffer),z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0+Uz,z.TEXTURE_2D,Az,0)}J.bindFramebuffer(z.DRAW_FRAMEBUFFER,qz.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&x){let K=B.stencilBuffer?z.DEPTH_STENCIL_ATTACHMENT:z.DEPTH_ATTACHMENT;z.invalidateFramebuffer(z.DRAW_FRAMEBUFFER,[K])}}}function BJ(B){return Math.min(D.maxSamples,B.samples)}function E(B){let K=$.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&K.__useRenderToTexture!==!1}function YJ(B){let K=U.render.frame;if(j.get(B)!==K)j.set(B,K),B.update()}function pz(B,K){let{colorSpace:H,format:f,type:i}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return K;if(H!==A1&&H!==nJ)if(JJ.getTransfer(H)===iz){if(f!==PJ||i!==wJ)mz("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else rz("WebGLTextures: Unsupported texture color space:",H);return K}function zJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)F.width=B.naturalWidth||B.width,F.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)F.width=B.displayWidth,F.height=B.displayHeight;else F.width=B.width,F.height=B.height;return F}this.allocateTextureUnit=a,this.resetTextureUnits=zz,this.getTextureUnits=C,this.setTextureUnits=l,this.setTexture2D=Vz,this.setTexture2DArray=n,this.setTexture3D=t,this.setTextureCube=e,this.rebindTextures=lz,this.setupRenderTarget=xz,this.updateRenderTargetMipmap=DJ,this.updateMultisampleRenderTarget=qJ,this.setupDepthRenderbuffer=jz,this.setupFrameBufferTexture=Mz,this.useMultisampledRTT=E,this.isReversedDepthBuffer=function(){return J.buffers.depth.getReversed()}}function W$(z,Q){function J($,D=nJ){let G,U=JJ.getTransfer(D);if($===wJ)return z.UNSIGNED_BYTE;if($===f1)return z.UNSIGNED_SHORT_4_4_4_4;if($===T1)return z.UNSIGNED_SHORT_5_5_5_1;if($===N5)return z.UNSIGNED_INT_5_9_9_9_REV;if($===D5)return z.UNSIGNED_INT_10F_11F_11F_REV;if($===Z5)return z.BYTE;if($===U5)return z.SHORT;if($===EQ)return z.UNSIGNED_SHORT;if($===H1)return z.INT;if($===gJ)return z.UNSIGNED_INT;if($===bJ)return z.FLOAT;if($===hJ)return z.HALF_FLOAT;if($===V5)return z.ALPHA;if($===Y5)return z.RGB;if($===PJ)return z.RGBA;if($===eJ)return z.DEPTH_COMPONENT;if($===sJ)return z.DEPTH_STENCIL;if($===X5)return z.RED;if($===h1)return z.RED_INTEGER;if($===rJ)return z.RG;if($===j1)return z.RG_INTEGER;if($===x1)return z.RGBA_INTEGER;if($===RQ||$===PQ||$===vQ||$===fQ)if(U===iz)if(G=Q.get("WEBGL_compressed_texture_s3tc_srgb"),G!==null){if($===RQ)return G.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===PQ)return G.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===vQ)return G.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===fQ)return G.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(G=Q.get("WEBGL_compressed_texture_s3tc"),G!==null){if($===RQ)return G.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===PQ)return G.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===vQ)return G.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===fQ)return G.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===I0||$===H0||$===E0||$===A0)if(G=Q.get("WEBGL_compressed_texture_pvrtc"),G!==null){if($===I0)return G.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===H0)return G.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===E0)return G.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===A0)return G.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===O0||$===F0||$===M0||$===L0||$===y0||$===gQ||$===w0)if(G=Q.get("WEBGL_compressed_texture_etc"),G!==null){if($===O0||$===F0)return U===iz?G.COMPRESSED_SRGB8_ETC2:G.COMPRESSED_RGB8_ETC2;if($===M0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:G.COMPRESSED_RGBA8_ETC2_EAC;if($===L0)return G.COMPRESSED_R11_EAC;if($===y0)return G.COMPRESSED_SIGNED_R11_EAC;if($===gQ)return G.COMPRESSED_RG11_EAC;if($===w0)return G.COMPRESSED_SIGNED_RG11_EAC}else return null;if($===C0||$===S0||$===R0||$===P0||$===v0||$===f0||$===T0||$===h0||$===j0||$===x0||$===_0||$===b0||$===d0||$===p0)if(G=Q.get("WEBGL_compressed_texture_astc"),G!==null){if($===C0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:G.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===S0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:G.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===R0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:G.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===P0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:G.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===v0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:G.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===f0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:G.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===T0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:G.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===h0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:G.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===j0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:G.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===x0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:G.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===_0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:G.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===b0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:G.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===d0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:G.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===p0)return U===iz?G.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:G.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===u0||$===g0||$===l0)if(G=Q.get("EXT_texture_compression_bptc"),G!==null){if($===u0)return U===iz?G.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:G.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===g0)return G.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===l0)return G.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===m0||$===c0||$===lQ||$===n0)if(G=Q.get("EXT_texture_compression_rgtc"),G!==null){if($===m0)return G.COMPRESSED_RED_RGTC1_EXT;if($===c0)return G.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===lQ)return G.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===n0)return G.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===NQ)return z.UNSIGNED_INT_24_8;return z[$]!==void 0?z[$]:null}return{convert:J}}var q$=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B$=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(z,Q){if(this.texture===null){let J=new _1(z.texture);if(z.depthNear!==Q.depthNear||z.depthFar!==Q.depthFar)this.depthNear=z.depthNear,this.depthFar=z.depthFar;this.texture=J}}getMesh(z){if(this.texture!==null){if(this.mesh===null){let Q=z.cameras[0].viewport,J=new TJ({vertexShader:q$,fragmentShader:B$,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new fJ(new k1(20,20),J)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends k5{constructor(z,Q){super();let J=this,$=null,D=1,G=null,U="local-floor",k=1,x=null,F=null,j=null,h=null,Y=null,M=null,S=typeof XRWebGLBinding<"u",g=new i1,Z={},q=Q.getContextAttributes(),P=null,c=null,X=[],I=[],L=new IJ,R=null,N=null,V=new XQ;V.viewport=new kJ;let s=new XQ;s.viewport=new kJ;let v=[V,s],_=new I5,zz=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(u){let Qz=X[u];if(Qz===void 0)Qz=new TQ,X[u]=Qz;return Qz.getTargetRaySpace()},this.getControllerGrip=function(u){let Qz=X[u];if(Qz===void 0)Qz=new TQ,X[u]=Qz;return Qz.getGripSpace()},this.getHand=function(u){let Qz=X[u];if(Qz===void 0)Qz=new TQ,X[u]=Qz;return Qz.getHandSpace()};function l(u){let Qz=I.indexOf(u.inputSource);if(Qz===-1)return;let $z=X[Qz];if($z!==void 0)$z.update(u.inputSource,u.frame,x||G),$z.dispatchEvent({type:u.type,data:u.inputSource})}function a(){$.removeEventListener("select",l),$.removeEventListener("selectstart",l),$.removeEventListener("selectend",l),$.removeEventListener("squeeze",l),$.removeEventListener("squeezestart",l),$.removeEventListener("squeezeend",l),$.removeEventListener("end",a),$.removeEventListener("inputsourceschange",d);for(let u=0;u<X.length;u++){let Qz=I[u];if(Qz===null)continue;I[u]=null,X[u].disconnect(Qz)}zz=null,C=null,g.reset();for(let u in Z)delete Z[u];if(z.setRenderTarget(P),Y=null,h=null,j=null,$=null,c=null,Tz.stop(),J.isPresenting=!1,z.setPixelRatio(R),z.setSize(L.width,L.height,!1),N!==null){let u=N.camera;u.fov=N.fov,u.zoom=N.zoom,u.updateProjectionMatrix(),N=null}J.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(u){if(D=u,J.isPresenting===!0)mz("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(u){if(U=u,J.isPresenting===!0)mz("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||G},this.setReferenceSpace=function(u){x=u},this.getBaseLayer=function(){return h!==null?h:Y},this.getBinding=function(){if(j===null&&S)j=new XRWebGLBinding($,Q);return j},this.getFrame=function(){return M},this.getSession=function(){return $},this.setSession=async function(u){if($=u,$!==null){if(P=z.getRenderTarget(),$.addEventListener("select",l),$.addEventListener("selectstart",l),$.addEventListener("selectend",l),$.addEventListener("squeeze",l),$.addEventListener("squeezestart",l),$.addEventListener("squeezeend",l),$.addEventListener("end",a),$.addEventListener("inputsourceschange",d),q.xrCompatible!==!0)await Q.makeXRCompatible();if(R=z.getPixelRatio(),z.getSize(L),!(S&&("createProjectionLayer"in XRWebGLBinding.prototype))){let $z={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:D};Y=new XRWebGLLayer($,Q,$z),$.updateRenderState({baseLayer:Y}),z.setPixelRatio(1),z.setSize(Y.framebufferWidth,Y.framebufferHeight,!1),c=new OJ(Y.framebufferWidth,Y.framebufferHeight,{format:PJ,type:wJ,colorSpace:z.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:Y.ignoreDepthValues===!1,resolveStencilBuffer:Y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:Y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:Y.ignoreDepthValues===!1})}else{let $z=null,yz=null,wz=null;if(q.depth)wz=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,$z=q.stencil?sJ:eJ,yz=q.stencil?NQ:gJ;let Mz={colorFormat:Q.RGBA8,depthFormat:wz,scaleFactor:D};j=this.getBinding(),h=j.createProjectionLayer(Mz),$.updateRenderState({layers:[h]}),z.setPixelRatio(1),z.setSize(h.textureWidth,h.textureHeight,!1),c=new OJ(h.textureWidth,h.textureHeight,{format:PJ,type:wJ,depthTexture:new HQ(h.textureWidth,h.textureHeight,yz,void 0,void 0,void 0,void 0,void 0,void 0,$z),stencilBuffer:q.stencil,colorSpace:z.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(k),x=null,G=await $.requestReferenceSpace(U),Tz.setContext($),Tz.start(),J.isPresenting=!0,J.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function d(u){for(let Qz=0;Qz<u.removed.length;Qz++){let $z=u.removed[Qz],yz=I.indexOf($z);if(yz>=0)I[yz]=null,X[yz].disconnect($z)}for(let Qz=0;Qz<u.added.length;Qz++){let $z=u.added[Qz],yz=I.indexOf($z);if(yz===-1){for(let Mz=0;Mz<X.length;Mz++)if(Mz>=I.length){I.push($z),yz=Mz;break}else if(I[Mz]===null){I[Mz]=$z,yz=Mz;break}if(yz===-1)break}let wz=X[yz];if(wz)wz.connect($z)}}let Vz=new hz,n=new hz;function t(u,Qz,$z){Vz.setFromMatrixPosition(Qz.matrixWorld),n.setFromMatrixPosition($z.matrixWorld);let yz=Vz.distanceTo(n),wz=Qz.projectionMatrix.elements,Mz=$z.projectionMatrix.elements,WJ=wz[14]/(wz[10]-1),fz=wz[14]/(wz[10]+1),jz=(wz[9]+1)/wz[5],lz=(wz[9]-1)/wz[5],xz=(wz[8]-1)/wz[0],DJ=(Mz[8]+1)/Mz[0],az=WJ*xz,VJ=WJ*DJ,qJ=yz/(-xz+DJ),BJ=qJ*-xz;if(Qz.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.translateX(BJ),u.translateZ(qJ),u.matrixWorld.compose(u.position,u.quaternion,u.scale),u.matrixWorldInverse.copy(u.matrixWorld).invert(),wz[10]===-1)u.projectionMatrix.copy(Qz.projectionMatrix),u.projectionMatrixInverse.copy(Qz.projectionMatrixInverse);else{let E=WJ+qJ,YJ=fz+qJ,pz=az-BJ,zJ=VJ+(yz-BJ),B=jz*fz/YJ*E,K=lz*fz/YJ*E;u.projectionMatrix.makePerspective(pz,zJ,B,K,E,YJ),u.projectionMatrixInverse.copy(u.projectionMatrix).invert()}}function e(u,Qz){if(Qz===null)u.matrixWorld.copy(u.matrix);else u.matrixWorld.multiplyMatrices(Qz.matrixWorld,u.matrix);u.matrixWorldInverse.copy(u.matrixWorld).invert()}this.updateCamera=function(u){if($===null)return;let{near:Qz,far:$z}=u;if(g.texture!==null){if(g.depthNear>0)Qz=g.depthNear;if(g.depthFar>0)$z=g.depthFar}if(_.near=s.near=V.near=Qz,_.far=s.far=V.far=$z,zz!==_.near||C!==_.far)$.updateRenderState({depthNear:_.near,depthFar:_.far}),zz=_.near,C=_.far;_.layers.mask=u.layers.mask|6,V.layers.mask=_.layers.mask&-5,s.layers.mask=_.layers.mask&-3;let yz=u.parent,wz=_.cameras;e(_,yz);for(let Mz=0;Mz<wz.length;Mz++)e(wz[Mz],yz);if(wz.length===2)t(_,V,s);else _.projectionMatrix.copy(V.projectionMatrix);if(N===null&&u.isPerspectiveCamera)N={camera:u,fov:u.fov,zoom:u.zoom};Sz(u,_,yz)};function Sz(u,Qz,$z){if($z===null)u.matrix.copy(Qz.matrixWorld);else u.matrix.copy($z.matrixWorld),u.matrix.invert(),u.matrix.multiply(Qz.matrixWorld);if(u.matrix.decompose(u.position,u.quaternion,u.scale),u.updateMatrixWorld(!0),u.projectionMatrix.copy(Qz.projectionMatrix),u.projectionMatrixInverse.copy(Qz.projectionMatrixInverse),u.isPerspectiveCamera)u.fov=H5*2*Math.atan(1/u.projectionMatrix.elements[5]),u.zoom=1}this.getCamera=function(){return _},this.getFoveation=function(){if(h===null&&Y===null)return;return k},this.setFoveation=function(u){if(k=u,h!==null)h.fixedFoveation=u;if(Y!==null&&Y.fixedFoveation!==void 0)Y.fixedFoveation=u},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)},this.getCameraTexture=function(u){return Z[u]};let Lz=null;function $J(u,Qz){if(F=Qz.getViewerPose(x||G),M=Qz,F!==null){let $z=F.views;if(Y!==null)z.setRenderTargetFramebuffer(c,Y.framebuffer),z.setRenderTarget(c);let yz=!1;if($z.length!==_.cameras.length)_.cameras.length=0,yz=!0;for(let fz=0;fz<$z.length;fz++){let jz=$z[fz],lz=null;if(Y!==null)lz=Y.getViewport(jz);else{let DJ=j.getViewSubImage(h,jz);if(lz=DJ.viewport,fz===0)z.setRenderTargetTextures(c,DJ.colorTexture,DJ.depthStencilTexture),z.setRenderTarget(c)}let xz=v[fz];if(xz===void 0)xz=new XQ,xz.layers.enable(fz),xz.viewport=new kJ,v[fz]=xz;if(xz.matrix.fromArray(jz.transform.matrix),xz.matrix.decompose(xz.position,xz.quaternion,xz.scale),xz.projectionMatrix.fromArray(jz.projectionMatrix),xz.projectionMatrixInverse.copy(xz.projectionMatrix).invert(),xz.viewport.set(lz.x,lz.y,lz.width,lz.height),fz===0)_.matrix.copy(xz.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale);if(yz===!0)_.cameras.push(xz)}let wz=$.enabledFeatures;if(wz&&wz.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&S){j=J.getBinding();let fz=j.getDepthInformation($z[0]);if(fz&&fz.isValid&&fz.texture)g.init(fz,$.renderState)}if(wz&&wz.includes("camera-access")&&S){z.state.unbindTexture(),j=J.getBinding();for(let fz=0;fz<$z.length;fz++){let jz=$z[fz].camera;if(jz){let lz=Z[jz];if(!lz)lz=new _1,Z[jz]=lz;let xz=j.getCameraImage(jz);lz.sourceTexture=xz}}}}for(let $z=0;$z<X.length;$z++){let yz=I[$z],wz=X[$z];if(yz!==null&&wz!==void 0)wz.update(yz,Qz,x||G)}if(Lz)Lz(u,Qz);if(Qz.detectedPlanes)J.dispatchEvent({type:"planesdetected",data:Qz});M=null}let Tz=new b1;Tz.setAnimationLoop($J),this.setAnimationLoop=function(u){Lz=u},this.dispose=function(){}}}var G$=new aJ,t1=new _z;t1.set(-1,0,0,0,1,0,0,0,1);function N$(z,Q){function J(Z,q){if(Z.matrixAutoUpdate===!0)Z.updateMatrix();q.value.copy(Z.matrix)}function $(Z,q){if(q.color.getRGB(Z.fogColor.value,I1(z)),q.isFog)Z.fogNear.value=q.near,Z.fogFar.value=q.far;else if(q.isFogExp2)Z.fogDensity.value=q.density}function D(Z,q,P,c,X){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)G(Z,q);else if(q.isMeshLambertMaterial){if(G(Z,q),q.envMap)Z.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)G(Z,q),h(Z,q);else if(q.isMeshPhongMaterial){if(G(Z,q),j(Z,q),q.envMap)Z.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(G(Z,q),Y(Z,q),q.isMeshPhysicalMaterial)M(Z,q,X)}else if(q.isMeshMatcapMaterial)G(Z,q),S(Z,q);else if(q.isMeshDepthMaterial)G(Z,q);else if(q.isMeshDistanceMaterial)G(Z,q),g(Z,q);else if(q.isMeshNormalMaterial)G(Z,q);else if(q.isLineBasicMaterial){if(U(Z,q),q.isLineDashedMaterial)k(Z,q)}else if(q.isPointsMaterial)x(Z,q,P,c);else if(q.isSpriteMaterial)F(Z,q);else if(q.isShadowMaterial)Z.color.value.copy(q.color),Z.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function G(Z,q){if(Z.opacity.value=q.opacity,q.color)Z.diffuse.value.copy(q.color);if(q.emissive)Z.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)Z.map.value=q.map,J(q.map,Z.mapTransform);if(q.alphaMap)Z.alphaMap.value=q.alphaMap,J(q.alphaMap,Z.alphaMapTransform);if(q.bumpMap){if(Z.bumpMap.value=q.bumpMap,J(q.bumpMap,Z.bumpMapTransform),Z.bumpScale.value=q.bumpScale,q.side===EJ)Z.bumpScale.value*=-1}if(q.normalMap){if(Z.normalMap.value=q.normalMap,J(q.normalMap,Z.normalMapTransform),Z.normalScale.value.copy(q.normalScale),q.side===EJ)Z.normalScale.value.negate()}if(q.displacementMap)Z.displacementMap.value=q.displacementMap,J(q.displacementMap,Z.displacementMapTransform),Z.displacementScale.value=q.displacementScale,Z.displacementBias.value=q.displacementBias;if(q.emissiveMap)Z.emissiveMap.value=q.emissiveMap,J(q.emissiveMap,Z.emissiveMapTransform);if(q.specularMap)Z.specularMap.value=q.specularMap,J(q.specularMap,Z.specularMapTransform);if(q.alphaTest>0)Z.alphaTest.value=q.alphaTest;let P=Q.get(q),c=P.envMap,X=P.envMapRotation;if(c){if(Z.envMap.value=c,Z.envMapRotation.value.setFromMatrix4(G$.makeRotationFromEuler(X)).transpose(),c.isCubeTexture&&c.isRenderTargetTexture===!1)Z.envMapRotation.value.premultiply(t1);Z.reflectivity.value=q.reflectivity,Z.ior.value=q.ior,Z.refractionRatio.value=q.refractionRatio}if(q.lightMap)Z.lightMap.value=q.lightMap,Z.lightMapIntensity.value=q.lightMapIntensity,J(q.lightMap,Z.lightMapTransform);if(q.aoMap)Z.aoMap.value=q.aoMap,Z.aoMapIntensity.value=q.aoMapIntensity,J(q.aoMap,Z.aoMapTransform)}function U(Z,q){if(Z.diffuse.value.copy(q.color),Z.opacity.value=q.opacity,q.map)Z.map.value=q.map,J(q.map,Z.mapTransform)}function k(Z,q){Z.dashSize.value=q.dashSize,Z.totalSize.value=q.dashSize+q.gapSize,Z.scale.value=q.scale}function x(Z,q,P,c){if(Z.diffuse.value.copy(q.color),Z.opacity.value=q.opacity,Z.size.value=q.size*P,Z.scale.value=c*0.5,q.map)Z.map.value=q.map,J(q.map,Z.uvTransform);if(q.alphaMap)Z.alphaMap.value=q.alphaMap,J(q.alphaMap,Z.alphaMapTransform);if(q.alphaTest>0)Z.alphaTest.value=q.alphaTest}function F(Z,q){if(Z.diffuse.value.copy(q.color),Z.opacity.value=q.opacity,Z.rotation.value=q.rotation,q.map)Z.map.value=q.map,J(q.map,Z.mapTransform);if(q.alphaMap)Z.alphaMap.value=q.alphaMap,J(q.alphaMap,Z.alphaMapTransform);if(q.alphaTest>0)Z.alphaTest.value=q.alphaTest}function j(Z,q){Z.specular.value.copy(q.specular),Z.shininess.value=Math.max(q.shininess,0.0001)}function h(Z,q){if(q.gradientMap)Z.gradientMap.value=q.gradientMap}function Y(Z,q){if(Z.metalness.value=q.metalness,q.metalnessMap)Z.metalnessMap.value=q.metalnessMap,J(q.metalnessMap,Z.metalnessMapTransform);if(Z.roughness.value=q.roughness,q.roughnessMap)Z.roughnessMap.value=q.roughnessMap,J(q.roughnessMap,Z.roughnessMapTransform);if(q.envMap)Z.envMapIntensity.value=q.envMapIntensity}function M(Z,q,P){if(Z.ior.value=q.ior,q.sheen>0){if(Z.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),Z.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)Z.sheenColorMap.value=q.sheenColorMap,J(q.sheenColorMap,Z.sheenColorMapTransform);if(q.sheenRoughnessMap)Z.sheenRoughnessMap.value=q.sheenRoughnessMap,J(q.sheenRoughnessMap,Z.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(Z.clearcoat.value=q.clearcoat,Z.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)Z.clearcoatMap.value=q.clearcoatMap,J(q.clearcoatMap,Z.clearcoatMapTransform);if(q.clearcoatRoughnessMap)Z.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,J(q.clearcoatRoughnessMap,Z.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(Z.clearcoatNormalMap.value=q.clearcoatNormalMap,J(q.clearcoatNormalMap,Z.clearcoatNormalMapTransform),Z.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===EJ)Z.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)Z.dispersion.value=q.dispersion;if(q.retroreflectivity>0)Z.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(Z.iridescence.value=q.iridescence,Z.iridescenceIOR.value=q.iridescenceIOR,Z.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],Z.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)Z.iridescenceMap.value=q.iridescenceMap,J(q.iridescenceMap,Z.iridescenceMapTransform);if(q.iridescenceThicknessMap)Z.iridescenceThicknessMap.value=q.iridescenceThicknessMap,J(q.iridescenceThicknessMap,Z.iridescenceThicknessMapTransform)}if(q.transmission>0){if(Z.transmission.value=q.transmission,Z.transmissionSamplerMap.value=P.texture,Z.transmissionSamplerSize.value.set(P.width,P.height),q.transmissionMap)Z.transmissionMap.value=q.transmissionMap,J(q.transmissionMap,Z.transmissionMapTransform);if(Z.thickness.value=q.thickness,q.thicknessMap)Z.thicknessMap.value=q.thicknessMap,J(q.thicknessMap,Z.thicknessMapTransform);Z.attenuationDistance.value=q.attenuationDistance,Z.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(Z.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)Z.anisotropyMap.value=q.anisotropyMap,J(q.anisotropyMap,Z.anisotropyMapTransform)}if(Z.specularIntensity.value=q.specularIntensity,Z.specularColor.value.copy(q.specularColor),q.specularColorMap)Z.specularColorMap.value=q.specularColorMap,J(q.specularColorMap,Z.specularColorMapTransform);if(q.specularIntensityMap)Z.specularIntensityMap.value=q.specularIntensityMap,J(q.specularIntensityMap,Z.specularIntensityMapTransform)}function S(Z,q){if(q.matcap)Z.matcap.value=q.matcap}function g(Z,q){let P=Q.get(q).light;Z.referencePosition.value.setFromMatrixPosition(P.matrixWorld),Z.nearDistance.value=P.shadow.camera.near,Z.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:D}}function D$(z,Q,J,$){let D={},G={},U=[],k=z.getParameter(z.MAX_UNIFORM_BUFFER_BINDINGS);function x(X,I){let L=I.program;$.uniformBlockBinding(X,L)}function F(X,I){let L=D[X.id];if(L===void 0)Z(X),L=j(X),D[X.id]=L,X.addEventListener("dispose",P);let R=I.program;$.updateUBOMapping(X,R);let N=Q.render.frame;if(G[X.id]!==N)Y(X),G[X.id]=N}function j(X){let I=h();X.__bindingPointIndex=I;let L=z.createBuffer(),R=X.__size,N=X.usage;return z.bindBuffer(z.UNIFORM_BUFFER,L),z.bufferData(z.UNIFORM_BUFFER,R,N),z.bindBuffer(z.UNIFORM_BUFFER,null),z.bindBufferBase(z.UNIFORM_BUFFER,I,L),L}function h(){for(let X=0;X<k;X++)if(U.indexOf(X)===-1)return U.push(X),X;return rz("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function Y(X){let I=D[X.id],L=X.uniforms,R=X.__cache;z.bindBuffer(z.UNIFORM_BUFFER,I);for(let N=0,V=L.length;N<V;N++){let s=L[N];if(Array.isArray(s))for(let v=0,_=s.length;v<_;v++)M(s[v],N,v,R);else M(s,N,0,R)}z.bindBuffer(z.UNIFORM_BUFFER,null)}function M(X,I,L,R){if(g(X,I,L,R)===!0){let{__offset:N,value:V}=X;if(Array.isArray(V)){let s=0;for(let v=0;v<V.length;v++){let _=V[v],zz=q(_);if(S(_,X.__data,s),typeof _!=="number"&&typeof _!=="boolean"&&!_.isMatrix3&&!ArrayBuffer.isView(_))s+=zz.storage/Float32Array.BYTES_PER_ELEMENT}}else S(V,X.__data,0);z.bufferSubData(z.UNIFORM_BUFFER,N,X.__data)}}function S(X,I,L){if(typeof X==="number"||typeof X==="boolean")I[0]=X;else if(X.isMatrix3)I[0]=X.elements[0],I[1]=X.elements[1],I[2]=X.elements[2],I[3]=0,I[4]=X.elements[3],I[5]=X.elements[4],I[6]=X.elements[5],I[7]=0,I[8]=X.elements[6],I[9]=X.elements[7],I[10]=X.elements[8],I[11]=0;else if(ArrayBuffer.isView(X))I.set(new X.constructor(X.buffer,X.byteOffset,I.length));else X.toArray(I,L)}function g(X,I,L,R){let N=X.value,V=I+"_"+L;if(R[V]===void 0){if(typeof N==="number"||typeof N==="boolean")R[V]=N;else if(ArrayBuffer.isView(N))R[V]=N.slice();else R[V]=N.clone();return!0}else{let s=R[V];if(typeof N==="number"||typeof N==="boolean"){if(s!==N)return R[V]=N,!0}else if(ArrayBuffer.isView(N))return!0;else if(s.equals(N)===!1)return s.copy(N),!0}return!1}function Z(X){let I=X.uniforms,L=0,R=16;for(let V=0,s=I.length;V<s;V++){let v=Array.isArray(I[V])?I[V]:[I[V]];for(let _=0,zz=v.length;_<zz;_++){let C=v[_],l=Array.isArray(C.value)?C.value:[C.value];for(let a=0,d=l.length;a<d;a++){let Vz=l[a],n=q(Vz),t=L%R,e=t%n.boundary,Sz=t+e;if(L+=e,Sz!==0&&R-Sz<n.storage)L+=R-Sz;C.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=L,L+=n.storage}}}let N=L%R;if(N>0)L+=R-N;return X.__size=L,X.__cache={},this}function q(X){let I={boundary:0,storage:0};if(typeof X==="number"||typeof X==="boolean")I.boundary=4,I.storage=4;else if(X.isVector2)I.boundary=8,I.storage=8;else if(X.isVector3||X.isColor)I.boundary=16,I.storage=12;else if(X.isVector4)I.boundary=16,I.storage=16;else if(X.isMatrix3)I.boundary=48,I.storage=48;else if(X.isMatrix4)I.boundary=64,I.storage=64;else if(X.isTexture)mz("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(X))I.boundary=16,I.storage=X.byteLength;else mz("WebGLRenderer: Unsupported uniform value type.",X);return I}function P(X){let I=X.target;I.removeEventListener("dispose",P);let L=U.indexOf(I.__bindingPointIndex);U.splice(L,1),z.deleteBuffer(D[I.id]),delete D[I.id],delete G[I.id]}function c(){for(let X in D)z.deleteBuffer(D[X]);U=[],D={},G={}}return{bind:x,update:F,dispose:c}}var Z$=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),LJ=null;function U$(){if(LJ===null)LJ=new E5(Z$,16,16,rJ,hJ),LJ.name="DFG_LUT",LJ.minFilter=HJ,LJ.magFilter=HJ,LJ.wrapS=mQ,LJ.wrapT=mQ,LJ.generateMipmaps=!1,LJ.needsUpdate=!0;return LJ}class V${constructor(z={}){let{canvas:Q=A5(),context:J=null,depth:$=!0,stencil:D=!1,alpha:G=!1,antialias:U=!1,premultipliedAlpha:k=!0,preserveDrawingBuffer:x=!1,powerPreference:F="default",failIfMajorPerformanceCaveat:j=!1,reversedDepthBuffer:h=!1,outputBufferType:Y=wJ}=z;this.isWebGLRenderer=!0;let M;if(J!==null){if(typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=J.getContextAttributes().alpha}else M=G;let S=Y,g=new Set([x1,j1,h1]),Z=new Set([wJ,gJ,EQ,NQ,f1,T1]),q=new Uint32Array(4),P=new Int32Array(4),c=new hz,X=null,I=null,L=[],R=[],N=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=CJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,s=!1,v=null,_=null,zz=null,C=null;this._outputColorSpace=O5;let l=0,a=0,d=null,Vz=-1,n=null,t=new kJ,e=new kJ,Sz=null,Lz=new ez(0),$J=0,Tz=Q.width,u=Q.height,Qz=1,$z=null,yz=null,wz=new kJ(0,0,Tz,u),Mz=new kJ(0,0,Tz,u),WJ=!1,fz=new v1,jz=!1,lz=!1,xz=new aJ,DJ=new hz,az=new kJ,VJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qJ=!1;function BJ(){return d===null?Qz:1}let E=J;function YJ(W,A){return Q.getContext(W,A)}let pz,zJ,B,K,H,f,i,Jz,qz,b,m,Uz,Az,Bz,r,Oz,Fz,dz,O,Kz,p,Wz,Yz;try{let W={alpha:!0,depth:$,stencil:D,antialias:U,premultipliedAlpha:k,preserveDrawingBuffer:x,powerPreference:F,failIfMajorPerformanceCaveat:j};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${F5}`);if(Q.addEventListener("webglcontextlost",Cz,!1),Q.addEventListener("webglcontextrestored",oz,!1),Q.addEventListener("webglcontextcreationerror",uz,!1),E===null){if(E=YJ("webgl2",W),E===null)if(YJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}o()}catch(W){throw Q.removeEventListener("webglcontextlost",Cz,!1),Q.removeEventListener("webglcontextrestored",oz,!1),Q.removeEventListener("webglcontextcreationerror",uz,!1),rz("WebGLRenderer: "+W.message),W}function o(){if(pz=new E8(E),pz.init(),p=new W$(E,pz),zJ=new N8(E,pz,z,p),B=new $$(E,pz),zJ.reversedDepthBuffer&&h)B.buffers.depth.setReversed(!0);_=E.createFramebuffer(),zz=E.createFramebuffer(),C=E.createFramebuffer(),K=new F8(E),H=new l9,f=new K$(E,pz,B,H,zJ,p,K),i=new H8(V),Jz=new L5(E),Wz=new B8(E,Jz),qz=new A8(E,Jz,K,Wz),b=new L8(E,qz,Jz,Wz,K),dz=new M8(E,zJ,f),r=new D8(H),m=new g9(V,i,pz,zJ,Wz,r),Uz=new N$(V,H),Az=new c9,Bz=new t9(pz),Fz=new q8(V,i,B,b,M,k),Oz=new Q$(V,b,zJ),Yz=new D$(E,K,zJ,B),O=new G8(E,pz,K),Kz=new O8(E,pz,K),K.programs=m.programs,V.capabilities=zJ,V.extensions=pz,V.properties=H,V.renderLists=Az,V.shadowMap=Oz,V.state=B,V.info=K}if(S!==wJ)N=new w8(S,Q.width,Q.height,U,$,D);let Nz=new a1(V,E);this.xr=Nz,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let W=pz.get("WEBGL_lose_context");if(W)W.loseContext()},this.forceContextRestore=function(){let W=pz.get("WEBGL_lose_context");if(W)W.restoreContext()},this.getPixelRatio=function(){return Qz},this.setPixelRatio=function(W){if(W===void 0)return;Qz=W,this.setSize(Tz,u,!1)},this.getSize=function(W){return W.set(Tz,u)},this.setSize=function(W,A,T=!0){if(Nz.isPresenting){mz("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Tz=W,u=A,Q.width=Math.floor(W*Qz),Q.height=Math.floor(A*Qz),T===!0)Q.style.width=W+"px",Q.style.height=A+"px";if(N!==null)N.setSize(Q.width,Q.height);this.setViewport(0,0,W,A)},this.getDrawingBufferSize=function(W){return W.set(Tz*Qz,u*Qz).floor()},this.setDrawingBufferSize=function(W,A,T){Tz=W,u=A,Qz=T,Q.width=Math.floor(W*T),Q.height=Math.floor(A*T),this.setViewport(0,0,W,A)},this.setEffects=function(W){if(S===wJ){rz("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(W){for(let A=0;A<W.length;A++)if(W[A].isOutputPass===!0){mz("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(W||[])},this.getCurrentViewport=function(W){return W.copy(t)},this.getViewport=function(W){return W.copy(wz)},this.setViewport=function(W,A,T,y){if(W.isVector4)wz.set(W.x,W.y,W.z,W.w);else wz.set(W,A,T,y);B.viewport(t.copy(wz).multiplyScalar(Qz).round())},this.getScissor=function(W){return W.copy(Mz)},this.setScissor=function(W,A,T,y){if(W.isVector4)Mz.set(W.x,W.y,W.z,W.w);else Mz.set(W,A,T,y);B.scissor(e.copy(Mz).multiplyScalar(Qz).round())},this.getScissorTest=function(){return WJ},this.setScissorTest=function(W){B.setScissorTest(WJ=W)},this.setOpaqueSort=function(W){$z=W},this.setTransparentSort=function(W){yz=W},this.getClearColor=function(W){return W.copy(Fz.getClearColor())},this.setClearColor=function(){Fz.setClearColor(...arguments)},this.getClearAlpha=function(){return Fz.getClearAlpha()},this.setClearAlpha=function(){Fz.setClearAlpha(...arguments)},this.clear=function(W=!0,A=!0,T=!0){let y=0;if(W){let w=!1;if(d!==null){let Zz=d.texture.format;w=g.has(Zz)}if(w){let Zz=d.texture.type,kz=Z.has(Zz),Dz=Fz.getClearColor(),Iz=Fz.getClearAlpha(),Ez=Dz.r,Rz=Dz.g,vz=Dz.b;if(kz)q[0]=Ez,q[1]=Rz,q[2]=vz,q[3]=Iz,E.clearBufferuiv(E.COLOR,0,q);else P[0]=Ez,P[1]=Rz,P[2]=vz,P[3]=Iz,E.clearBufferiv(E.COLOR,0,P)}else y|=E.COLOR_BUFFER_BIT}if(A)y|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(T)y|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(y!==0)E.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(W){W.setRenderer(this),v=W},this.dispose=function(){Q.removeEventListener("webglcontextlost",Cz,!1),Q.removeEventListener("webglcontextrestored",oz,!1),Q.removeEventListener("webglcontextcreationerror",uz,!1),Fz.dispose(),Az.dispose(),Bz.dispose(),H.dispose(),i.dispose(),b.dispose(),Wz.dispose(),Yz.dispose(),m.dispose(),Nz.dispose(),Nz.removeEventListener("sessionstart",eQ),Nz.removeEventListener("sessionend",z0),dJ.stop()};function Cz(W){W.preventDefault(),o0("WebGLRenderer: Context Lost."),s=!0}function oz(){o0("WebGLRenderer: Context Restored."),s=!1;let W=K.autoReset,A=Oz.enabled,T=Oz.autoUpdate,y=Oz.needsUpdate,w=Oz.type;o(),K.autoReset=W,Oz.enabled=A,Oz.autoUpdate=T,Oz.needsUpdate=y,Oz.type=w}function uz(W){rz("WebGLRenderer: A WebGL context could not be created. Reason: ",W.statusMessage)}function FJ(W){let A=W.target;A.removeEventListener("dispose",FJ),SJ(A)}function SJ(W){r1(W),H.remove(W)}function r1(W){let A=H.get(W).programs;if(A!==void 0){if(A.forEach(function(T){m.releaseProgram(T)}),W.isShaderMaterial)m.releaseShaderCache(W)}}this.renderBufferDirect=function(W,A,T,y,w,Zz){if(A===null)A=VJ;let kz=w.isMesh&&w.matrixWorld.determinantAffine()<0,Dz=J2(W,A,T,y,w);B.setMaterial(y,kz);let Iz=T.index,Ez=1;if(y.wireframe===!0){if(Iz=qz.getWireframeAttribute(T),Iz===void 0)return;Ez=2}let Rz=T.drawRange,vz=T.attributes.position,Hz=Rz.start*Ez,gz=(Rz.start+Rz.count)*Ez;if(Zz!==null)Hz=Math.max(Hz,Zz.start*Ez),gz=Math.min(gz,(Zz.start+Zz.count)*Ez);if(Iz!==null)Hz=Math.max(Hz,0),gz=Math.min(gz,Iz.count);else if(vz!==void 0&&vz!==null)Hz=Math.max(Hz,0),gz=Math.min(gz,vz.count);let KJ=gz-Hz;if(KJ<0||KJ===1/0)return;Wz.setup(w,y,Dz,T,Iz);let tz,nz=O;if(Iz!==null)tz=Jz.get(Iz),nz=Kz,nz.setIndex(tz);if(w.isMesh)if(y.wireframe===!0)B.setLineWidth(y.wireframeLinewidth*BJ()),nz.setMode(E.LINES);else nz.setMode(E.TRIANGLES);else if(w.isLine){let ZJ=y.linewidth;if(ZJ===void 0)ZJ=1;if(B.setLineWidth(ZJ*BJ()),w.isLineSegments)nz.setMode(E.LINES);else if(w.isLineLoop)nz.setMode(E.LINE_LOOP);else nz.setMode(E.LINE_STRIP)}else if(w.isPoints)nz.setMode(E.POINTS);else if(w.isSprite)nz.setMode(E.TRIANGLES);if(w.isBatchedMesh)if(!pz.get("WEBGL_multi_draw")){let{_multiDrawStarts:ZJ,_multiDrawCounts:Xz,_multiDrawCount:UJ}=w,bz=Iz?Jz.get(Iz).bytesPerElement:1,AJ=H.get(y).currentProgram.getUniforms();for(let MJ=0;MJ<UJ;MJ++)AJ.setValue(E,"_gl_DrawID",MJ),nz.render(ZJ[MJ]/bz,Xz[MJ])}else nz.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else if(w.isInstancedMesh)nz.renderInstances(Hz,KJ,w.count);else if(T.isInstancedBufferGeometry){let ZJ=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,Xz=Math.min(T.instanceCount,ZJ);nz.renderInstances(Hz,KJ,Xz)}else nz.render(Hz,KJ)};function rQ(W,A,T,y){if(v!==null&&W.isNodeMaterial)v.setObject(y,W);if(jz===!0)r.setState(W,T,!1);if(W.transparent===!0&&W.side===RJ&&W.forceSinglePass===!1)W.side=EJ,W.needsUpdate=!0,ZQ(W,A,y),W.side=BQ,W.needsUpdate=!0,ZQ(W,A,y),W.side=RJ;else ZQ(W,A,y)}this.compile=function(W,A,T=null){if(T===null)T=W;if(v!==null)v.renderStart(W,A,T);if(I=Bz.get(T),I.init(A),R.push(I),T.traverseVisible(function(w){if(w.isLight&&w.layers.test(A.layers)){if(I.pushLight(w),w.castShadow)I.pushShadow(w)}}),W!==T)W.traverseVisible(function(w){if(w.isLight&&w.layers.test(A.layers)){if(I.pushLight(w),w.castShadow)I.pushShadow(w)}});if(I.setupLights(),v!==null)v.updateLights(I.state.lightsArray);if(lz=this.localClippingEnabled,jz=r.init(this.clippingPlanes,lz),jz===!0)r.setGlobalState(this.clippingPlanes,A);if(v!==null)Oz.render(I.state.shadowsArray,T,A);let y=new Set;if(W.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;let Zz=w.material;if(Zz)if(Array.isArray(Zz))for(let kz=0;kz<Zz.length;kz++){let Dz=Zz[kz];rQ(Dz,T,A,w),y.add(Dz)}else rQ(Zz,T,A,w),y.add(Zz)}),I=R.pop(),v!==null)v.renderEnd();return y},this.compileAsync=function(W,A,T=null){let y=this.compile(W,A,T);return new Promise((w)=>{function Zz(){if(y.forEach(function(kz){let Iz=H.get(kz).currentProgram;if(Iz===void 0||Iz.isReady())y.delete(kz)}),y.size===0){w(W);return}setTimeout(Zz,10)}if(pz.get("KHR_parallel_shader_compile")!==null)Zz();else setTimeout(Zz,10)})};let LQ=null;function e1(W){if(LQ)LQ(W)}function eQ(){dJ.stop()}function z0(){dJ.start()}let dJ=new b1;if(dJ.setAnimationLoop(e1),typeof self<"u")dJ.setContext(self);this.setAnimationLoop=function(W){LQ=W,Nz.setAnimationLoop(W),W===null?dJ.stop():dJ.start()},Nz.addEventListener("sessionstart",eQ),Nz.addEventListener("sessionend",z0),this.render=function(W,A){if(A!==void 0&&A.isCamera!==!0){rz("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(s===!0)return;if(v!==null)v.renderStart(W,A);let T=Nz.enabled===!0&&Nz.isPresenting===!0,y=N!==null&&(d===null||T)&&N.begin(V,d);if(W.matrixWorldAutoUpdate===!0)W.updateMatrixWorld();if(A.parent===null&&A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(Nz.enabled===!0&&Nz.isPresenting===!0&&(N===null||N.isCompositing()===!1)){if(Nz.cameraAutoUpdate===!0)Nz.updateCamera(A);A=Nz.getCamera()}if(W.isScene===!0)W.onBeforeRender(V,W,A,d);if(I=Bz.get(W,R.length),I.init(A),I.state.textureUnits=f.getTextureUnits(),R.push(I),xz.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),fz.setFromProjectionMatrix(xz,s0,A.reversedDepth),lz=this.localClippingEnabled,jz=r.init(this.clippingPlanes,lz),X=Az.get(W,L.length),X.init(),L.push(X),Nz.enabled===!0&&Nz.isPresenting===!0){let kz=V.xr.getDepthSensingMesh();if(kz!==null)yQ(kz,A,-1/0,V.sortObjects)}if(yQ(W,A,0,V.sortObjects),X.finish(),v!==null)v.updateLights(I.state.lightsArray);if(V.sortObjects===!0)X.sort($z,yz);if(qJ=Nz.enabled===!1||Nz.isPresenting===!1||Nz.hasDepthSensing()===!1,qJ)Fz.addToRenderList(X,W);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(jz===!0)r.beginShadows();let w=I.state.shadowsArray;if(Oz.render(w,W,A),jz===!0)r.endShadows();if((y&&N.hasRenderPass())===!1){let{opaque:kz,transmissive:Dz}=X;if(I.setupLights(),A.isArrayCamera){let Iz=A.cameras;if(Dz.length>0)for(let Ez=0,Rz=Iz.length;Ez<Rz;Ez++){let vz=Iz[Ez];Q0(kz,Dz,W,vz)}if(qJ)Fz.render(W);for(let Ez=0,Rz=Iz.length;Ez<Rz;Ez++){let vz=Iz[Ez];J0(X,W,vz,vz.viewport)}}else{if(Dz.length>0)Q0(kz,Dz,W,A);if(qJ)Fz.render(W);J0(X,W,A)}}if(d!==null&&a===0)f.updateMultisampleRenderTarget(d),f.updateRenderTargetMipmap(d);if(y)N.end(V);if(W.isScene===!0)W.onAfterRender(V,W,A);if(Wz.resetDefaultState(),Vz=-1,n=null,R.pop(),R.length>0){if(I=R[R.length-1],f.setTextureUnits(I.state.textureUnits),jz===!0)r.setGlobalState(V.clippingPlanes,I.state.camera)}else I=null;if(L.pop(),L.length>0)X=L[L.length-1];else X=null;if(v!==null)v.renderEnd()};function yQ(W,A,T,y){if(W.visible===!1)return;if(W.layers.test(A.layers)){if(W.isGroup)T=W.renderOrder;else if(W.isLOD){if(W.autoUpdate===!0)W.update(A)}else if(W.isLightProbeGrid)I.pushLightProbeGrid(W);else if(W.isLight){if(I.pushLight(W),W.castShadow)I.pushShadow(W)}else if(W.isSprite){if(!W.frustumCulled||W.intersectsFrustum(fz)){if(y)az.setFromMatrixPosition(W.matrixWorld).applyMatrix4(xz);let kz=b.update(W),Dz=W.material;if(Dz.visible)X.push(W,kz,Dz,T,az.z,null,A)}}else if(W.isMesh||W.isLine||W.isPoints){if(!W.frustumCulled||W.intersectsFrustum(fz)){let kz=b.update(W),Dz=W.material;if(y){if(W.boundingSphere!==void 0){if(W.boundingSphere===null)W.computeBoundingSphere();az.copy(W.boundingSphere.center)}else{if(kz.boundingSphere===null)kz.computeBoundingSphere();az.copy(kz.boundingSphere.center)}az.applyMatrix4(W.matrixWorld).applyMatrix4(xz)}if(Array.isArray(Dz)){let Iz=kz.groups;for(let Ez=0,Rz=Iz.length;Ez<Rz;Ez++){let vz=Iz[Ez],Hz=Dz[vz.materialIndex];if(Hz&&Hz.visible)X.push(W,kz,Hz,T,az.z,vz,A)}}else if(Dz.visible)X.push(W,kz,Dz,T,az.z,null,A)}}}let Zz=W.children;for(let kz=0,Dz=Zz.length;kz<Dz;kz++)yQ(Zz[kz],A,T,y)}function J0(W,A,T,y){let{opaque:w,transmissive:Zz,transparent:kz}=W;if(I.setupLightsView(T),jz===!0)r.setGlobalState(V.clippingPlanes,T);if(y)B.viewport(t.copy(y));if(w.length>0)DQ(w,A,T);if(Zz.length>0)DQ(Zz,A,T);if(kz.length>0)DQ(kz,A,T);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Q0(W,A,T,y){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[y.id]===void 0){let Hz=pz.has("EXT_color_buffer_half_float")||pz.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[y.id]=new OJ(1,1,{generateMipmaps:!0,type:Hz?hJ:wJ,minFilter:oJ,samples:Math.max(4,zJ.samples),stencilBuffer:D,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:JJ.workingColorSpace})}let Zz=I.state.transmissionRenderTarget[y.id],kz=y.viewport||t;Zz.setSize(kz.z*V.transmissionResolutionScale,kz.w*V.transmissionResolutionScale);let Dz=V.getRenderTarget(),Iz=V.getActiveCubeFace(),Ez=V.getActiveMipmapLevel();if(V.setRenderTarget(Zz),V.getClearColor(Lz),$J=V.getClearAlpha(),$J<1)V.setClearColor(16777215,0.5);if(V.clear(),qJ)Fz.render(T);let Rz=V.toneMapping;V.toneMapping=CJ;let vz=y.viewport;if(y.viewport!==void 0)y.viewport=void 0;if(I.setupLightsView(y),jz===!0)r.setGlobalState(V.clippingPlanes,y);if(DQ(W,T,y),f.updateMultisampleRenderTarget(Zz),f.updateRenderTargetMipmap(Zz),pz.has("WEBGL_multisampled_render_to_texture")===!1){let Hz=!1;for(let gz=0,KJ=A.length;gz<KJ;gz++){let tz=A[gz],{object:nz,geometry:ZJ,material:Xz,group:UJ}=tz;if(Xz.side===RJ&&nz.layers.test(y.layers)){let bz=Xz.side;Xz.side=EJ,Xz.needsUpdate=!0,$0(nz,T,y,ZJ,Xz,UJ),Xz.side=bz,Xz.needsUpdate=!0,Hz=!0}}if(Hz===!0)f.updateMultisampleRenderTarget(Zz),f.updateRenderTargetMipmap(Zz)}if(V.setRenderTarget(Dz,Iz,Ez),V.setClearColor(Lz,$J),vz!==void 0)y.viewport=vz;V.toneMapping=Rz}function DQ(W,A,T){let y=A.isScene===!0?A.overrideMaterial:null;for(let w=0,Zz=W.length;w<Zz;w++){let kz=W[w],{object:Dz,geometry:Iz,group:Ez}=kz,Rz=kz.material;if(Rz.allowOverride===!0&&y!==null)Rz=y;if(Dz.layers.test(T.layers))$0(Dz,A,T,Iz,Rz,Ez)}}function $0(W,A,T,y,w,Zz){if(v!==null&&w.isNodeMaterial)v.setObject(W,w);if(W.onBeforeRender(V,A,T,y,w,Zz),W.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,W.matrixWorld),W.normalMatrix.getNormalMatrix(W.modelViewMatrix),w.onBeforeRender(V,A,T,y,W,Zz),w.transparent===!0&&w.side===RJ&&w.forceSinglePass===!1)w.side=EJ,w.needsUpdate=!0,V.renderBufferDirect(T,A,y,w,W,Zz),w.side=BQ,w.needsUpdate=!0,V.renderBufferDirect(T,A,y,w,W,Zz),w.side=RJ;else V.renderBufferDirect(T,A,y,w,W,Zz);W.onAfterRender(V,A,T,y,w,Zz)}function ZQ(W,A,T){if(A.isScene!==!0)A=VJ;let y=H.get(W),w=I.state.lights,Zz=I.state.shadowsArray,kz=w.state.version,Dz=m.getParameters(W,w.state,Zz,A,T,I.state.lightProbeGridArray),Iz=m.getProgramCacheKey(Dz),Ez=y.programs;y.environment=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?A.environment:null,y.fog=A.fog;let Rz=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap;if(y.envMap=i.get(W.envMap||y.environment,Rz),y.envMapRotation=y.environment!==null&&W.envMap===null?A.environmentRotation:W.envMapRotation,Ez===void 0)W.addEventListener("dispose",FJ),Ez=new Map,y.programs=Ez;let vz=Ez.get(Iz);if(vz!==void 0){if(y.currentProgram===vz&&y.lightsStateVersion===kz)return W0(W,Dz),vz}else{if(Dz.uniforms=m.getUniforms(W),v!==null&&W.isNodeMaterial)v.build(W,T,Dz);W.onBeforeCompile(Dz,V),vz=m.acquireProgram(Dz,Iz),Ez.set(Iz,vz),y.uniforms=Dz.uniforms}let Hz=y.uniforms;if(!W.isShaderMaterial&&!W.isRawShaderMaterial||W.clipping===!0)Hz.clippingPlanes=r.uniform;if(W0(W,Dz),y.needsLights=$2(W),y.lightsStateVersion=kz,y.needsLights)Hz.ambientLightColor.value=w.state.ambient,Hz.lightProbe.value=w.state.probe,Hz.sunLights.value=w.state.sun,Hz.sunLightShadows.value=w.state.sunShadow,Hz.directionalLights.value=w.state.directional,Hz.directionalLightShadows.value=w.state.directionalShadow,Hz.spotLights.value=w.state.spot,Hz.spotLightShadows.value=w.state.spotShadow,Hz.rectAreaLights.value=w.state.rectArea,Hz.ltc_1.value=w.state.rectAreaLTC1,Hz.ltc_2.value=w.state.rectAreaLTC2,Hz.pointLights.value=w.state.point,Hz.pointLightShadows.value=w.state.pointShadow,Hz.hemisphereLights.value=w.state.hemi,Hz.sunShadowMatrix.value=w.state.sunShadowMatrix,Hz.sunShadowCascade.value=w.state.sunShadowCascade,Hz.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Hz.spotLightMatrix.value=w.state.spotLightMatrix,Hz.spotLightMap.value=w.state.spotLightMap,Hz.pointShadowMatrix.value=w.state.pointShadowMatrix;return y.lightProbeGrid=I.state.lightProbeGridArray.length>0,y.currentProgram=vz,y.uniformsList=null,vz}function K0(W){if(W.uniformsList===null){let A=W.currentProgram.getUniforms();W.uniformsList=qQ.seqWithValue(A.seq,W.uniforms)}return W.uniformsList}function W0(W,A){let T=H.get(W);T.outputColorSpace=A.outputColorSpace,T.batching=A.batching,T.batchingColor=A.batchingColor,T.instancing=A.instancing,T.instancingColor=A.instancingColor,T.instancingMorph=A.instancingMorph,T.skinning=A.skinning,T.morphTargets=A.morphTargets,T.morphNormals=A.morphNormals,T.morphColors=A.morphColors,T.morphTargetsCount=A.morphTargetsCount,T.numClippingPlanes=A.numClippingPlanes,T.numIntersection=A.numClipIntersection,T.vertexAlphas=A.vertexAlphas,T.vertexTangents=A.vertexTangents,T.toneMapping=A.toneMapping}function z2(W,A){if(W.length===0)return null;if(W.length===1)return W[0].texture!==null?W[0]:null;c.setFromMatrixPosition(A.matrixWorld);for(let T=0,y=W.length;T<y;T++){let w=W[T];if(w.texture!==null&&w.boundingBox.containsPoint(c))return w}return null}function J2(W,A,T,y,w){if(A.isScene!==!0)A=VJ;f.resetTextureUnits();let Zz=A.fog,kz=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,Dz=d===null?V.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:JJ.workingColorSpace,Iz=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Ez=i.get(y.envMap||kz,Iz),Rz=y.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vz=!!T.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),Hz=!!T.morphAttributes.position,gz=!!T.morphAttributes.normal,KJ=!!T.morphAttributes.color,tz=CJ;if(y.toneMapped){if(d===null||d.isXRRenderTarget===!0)tz=V.toneMapping}let nz=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,ZJ=nz!==void 0?nz.length:0,Xz=H.get(y),UJ=I.state.lights;if(jz===!0){if(lz===!0||W!==n){let sz=W===n&&y.id===Vz;r.setState(y,W,sz)}}let bz=!1;if(y.version===Xz.__version){if(Xz.needsLights&&Xz.lightsStateVersion!==UJ.state.version)bz=!0;else if(Xz.outputColorSpace!==Dz)bz=!0;else if(w.isBatchedMesh&&Xz.batching===!1)bz=!0;else if(!w.isBatchedMesh&&Xz.batching===!0)bz=!0;else if(w.isBatchedMesh&&Xz.batchingColor===!0&&w._colorsTexture===null)bz=!0;else if(w.isBatchedMesh&&Xz.batchingColor===!1&&w._colorsTexture!==null)bz=!0;else if(w.isInstancedMesh&&Xz.instancing===!1)bz=!0;else if(!w.isInstancedMesh&&Xz.instancing===!0)bz=!0;else if(w.isSkinnedMesh&&Xz.skinning===!1)bz=!0;else if(!w.isSkinnedMesh&&Xz.skinning===!0)bz=!0;else if(w.isInstancedMesh&&Xz.instancingColor===!0&&w.instanceColor===null)bz=!0;else if(w.isInstancedMesh&&Xz.instancingColor===!1&&w.instanceColor!==null)bz=!0;else if(w.isInstancedMesh&&Xz.instancingMorph===!0&&w.morphTexture===null)bz=!0;else if(w.isInstancedMesh&&Xz.instancingMorph===!1&&w.morphTexture!==null)bz=!0;else if(Xz.envMap!==Ez)bz=!0;else if(y.fog===!0&&Xz.fog!==Zz)bz=!0;else if(Xz.numClippingPlanes!==void 0&&(Xz.numClippingPlanes!==r.numPlanes||Xz.numIntersection!==r.numIntersection))bz=!0;else if(Xz.vertexAlphas!==Rz)bz=!0;else if(Xz.vertexTangents!==vz)bz=!0;else if(Xz.morphTargets!==Hz)bz=!0;else if(Xz.morphNormals!==gz)bz=!0;else if(Xz.morphColors!==KJ)bz=!0;else if(Xz.toneMapping!==tz)bz=!0;else if(Xz.morphTargetsCount!==ZJ)bz=!0;else if(!!Xz.lightProbeGrid!==I.state.lightProbeGridArray.length>0)bz=!0}else bz=!0,Xz.__version=y.version;let AJ=Xz.currentProgram;if(bz===!0){if(AJ=ZQ(y,A,w),v&&y.isNodeMaterial)v.onUpdateProgram(y,AJ,Xz)}let MJ=!1,jJ=!1,lJ=!1,cz=AJ.getUniforms(),QJ=Xz.uniforms;if(B.useProgram(AJ.program))MJ=!0,jJ=!0,lJ=!0;if(y.id!==Vz)Vz=y.id,jJ=!0;if(Xz.needsLights){let sz=z2(I.state.lightProbeGridArray,w);if(Xz.lightProbeGrid!==sz)Xz.lightProbeGrid=sz,jJ=!0}if(MJ||n!==W){if(B.buffers.depth.getReversed()&&W.reversedDepth!==!0)W._reversedDepth=!0,W.updateProjectionMatrix();cz.setValue(E,"projectionMatrix",W.projectionMatrix),cz.setValue(E,"viewMatrix",W.matrixWorldInverse);let _J=cz.map.cameraPosition;if(_J!==void 0)_J.setValue(E,DJ.setFromMatrixPosition(W.matrixWorld));if(zJ.logarithmicDepthBuffer)cz.setValue(E,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2));if(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)cz.setValue(E,"isOrthographic",W.isOrthographicCamera===!0);if(n!==W)n=W,jJ=!0,lJ=!0}if(Xz.needsLights){if(UJ.state.sunShadowMap.length>0)cz.setValue(E,"sunShadowMap",UJ.state.sunShadowMap,f);if(UJ.state.directionalShadowMap.length>0)cz.setValue(E,"directionalShadowMap",UJ.state.directionalShadowMap,f);if(UJ.state.spotShadowMap.length>0)cz.setValue(E,"spotShadowMap",UJ.state.spotShadowMap,f);if(UJ.state.pointShadowMap.length>0)cz.setValue(E,"pointShadowMap",UJ.state.pointShadowMap,f)}if(w.isSkinnedMesh){cz.setOptional(E,w,"bindMatrix"),cz.setOptional(E,w,"bindMatrixInverse");let sz=w.skeleton;if(sz){if(sz.boneTexture===null)sz.computeBoneTexture();cz.setValue(E,"boneTexture",sz.boneTexture,f)}}if(w.isBatchedMesh){if(cz.setOptional(E,w,"batchingTexture"),cz.setValue(E,"batchingTexture",w._matricesTexture,f),cz.setOptional(E,w,"batchingIdTexture"),cz.setValue(E,"batchingIdTexture",w._indirectTexture,f),cz.setOptional(E,w,"batchingColorTexture"),w._colorsTexture!==null)cz.setValue(E,"batchingColorTexture",w._colorsTexture,f)}let xJ=T.morphAttributes;if(xJ.position!==void 0||xJ.normal!==void 0||xJ.color!==void 0)dz.update(w,T,AJ);if(jJ||Xz.receiveShadow!==w.receiveShadow)Xz.receiveShadow=w.receiveShadow,cz.setValue(E,"receiveShadow",w.receiveShadow);if((y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial)&&y.envMap===null&&A.environment!==null)QJ.envMapIntensity.value=A.environmentIntensity;if(QJ.dfgLUT!==void 0)QJ.dfgLUT.value=U$();if(jJ){if(cz.setValue(E,"toneMappingExposure",V.toneMappingExposure),Xz.needsLights)Q2(QJ,lJ);if(Zz&&y.fog===!0)Uz.refreshFogUniforms(QJ,Zz);if(Uz.refreshMaterialUniforms(QJ,y,Qz,u,I.state.transmissionRenderTarget[W.id]),Xz.needsLights&&Xz.lightProbeGrid){let sz=Xz.lightProbeGrid;QJ.probesSH.value=sz.texture,QJ.probesMin.value.copy(sz.boundingBox.min),QJ.probesMax.value.copy(sz.boundingBox.max),QJ.probesResolution.value.copy(sz.resolution)}qQ.upload(E,K0(Xz),QJ,f)}if(y.isShaderMaterial&&y.uniformsNeedUpdate===!0)qQ.upload(E,K0(Xz),QJ,f),y.uniformsNeedUpdate=!1;if(y.isSpriteMaterial)cz.setValue(E,"center",w.center);if(cz.setValue(E,"modelViewMatrix",w.modelViewMatrix),cz.setValue(E,"normalMatrix",w.normalMatrix),cz.setValue(E,"modelMatrix",w.matrixWorld),y.uniformsGroups!==void 0){let sz=y.uniformsGroups;for(let _J=0,mJ=sz.length;_J<mJ;_J++){let B0=sz[_J];Yz.update(B0,AJ),Yz.bind(B0,AJ)}}return AJ}function Q2(W,A){W.ambientLightColor.needsUpdate=A,W.lightProbe.needsUpdate=A,W.sunLights.needsUpdate=A,W.sunLightShadows.needsUpdate=A,W.directionalLights.needsUpdate=A,W.directionalLightShadows.needsUpdate=A,W.pointLights.needsUpdate=A,W.pointLightShadows.needsUpdate=A,W.spotLights.needsUpdate=A,W.spotLightShadows.needsUpdate=A,W.rectAreaLights.needsUpdate=A,W.hemisphereLights.needsUpdate=A}function $2(W){return W.isMeshLambertMaterial||W.isMeshToonMaterial||W.isMeshPhongMaterial||W.isMeshStandardMaterial||W.isShadowMaterial||W.isShaderMaterial&&W.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return a},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(W,A,T){let y=H.get(W);if(y.__autoAllocateDepthBuffer=W.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1)y.__useRenderToTexture=!1;H.get(W.texture).__webglTexture=A,H.get(W.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:T,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(W,A){let T=H.get(W);T.__webglFramebuffer=A,T.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(W,A=0,T=0){d=W,l=A,a=T;let y=null,w=!1,Zz=!1;if(W){let Dz=H.get(W);if(Dz.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(E.FRAMEBUFFER,Dz.__webglFramebuffer),t.copy(W.viewport),e.copy(W.scissor),Sz=W.scissorTest,B.viewport(t),B.scissor(e),B.setScissorTest(Sz),Vz=-1;return}else if(Dz.__webglFramebuffer===void 0)f.setupRenderTarget(W);else if(Dz.__hasExternalTextures)f.rebindTextures(W,H.get(W.texture).__webglTexture,H.get(W.depthTexture).__webglTexture);else if(W.depthBuffer){let Rz=W.depthTexture;if(Dz.__boundDepthTexture!==Rz){if(Rz!==null&&H.has(Rz)&&(W.width!==Rz.image.width||W.height!==Rz.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");f.setupDepthRenderbuffer(W)}}let Iz=W.texture;if(Iz.isData3DTexture||Iz.isDataArrayTexture||Iz.isCompressedArrayTexture)Zz=!0;let Ez=H.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget){if(Array.isArray(Ez[A]))y=Ez[A][T];else y=Ez[A];w=!0}else if(W.samples>0&&f.useMultisampledRTT(W)===!1)y=H.get(W).__webglMultisampledFramebuffer;else if(Array.isArray(Ez))y=Ez[T];else y=Ez;t.copy(W.viewport),e.copy(W.scissor),Sz=W.scissorTest}else t.copy(wz).multiplyScalar(Qz).floor(),e.copy(Mz).multiplyScalar(Qz).floor(),Sz=WJ;if(T!==0)y=_;if(B.bindFramebuffer(E.FRAMEBUFFER,y))B.drawBuffers(W,y);if(B.viewport(t),B.scissor(e),B.setScissorTest(Sz),w){let Dz=H.get(W.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+A,Dz.__webglTexture,T)}else if(Zz){let Dz=A;for(let Iz=0;Iz<W.textures.length;Iz++){let Ez=H.get(W.textures[Iz]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Iz,Ez.__webglTexture,T,Dz)}}else if(W!==null&&T!==0){let Dz=H.get(W.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Dz.__webglTexture,T)}Vz=-1};function q0(W){let A=H.get(W);if(A.__readFormat!==W.format||A.__readType!==W.type)A.__readFormat=W.format,A.__readType=W.type,A.__formatReadable=zJ.textureFormatReadable(W.format),A.__typeReadable=zJ.textureTypeReadable(W.type);return A}if(this.readRenderTargetPixels=function(W,A,T,y,w,Zz,kz,Dz=0){if(!(W&&W.isWebGLRenderTarget)){rz("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Iz=H.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&kz!==void 0)Iz=Iz[kz];if(Iz){B.bindFramebuffer(E.FRAMEBUFFER,Iz);try{let Ez=W.textures[Dz],Rz=Ez.format,vz=Ez.type;if(W.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+Dz);let Hz=q0(Ez);if(Hz.__formatReadable===!1){rz("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Hz.__typeReadable===!1){rz("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(A>=0&&A<=W.width-y&&(T>=0&&T<=W.height-w))E.readPixels(A,T,y,w,p.convert(Rz),p.convert(vz),Zz)}finally{let Ez=d!==null?H.get(d).__webglFramebuffer:null;B.bindFramebuffer(E.FRAMEBUFFER,Ez)}}},this.readRenderTargetPixelsAsync=async function(W,A,T,y,w,Zz,kz,Dz=0){if(!(W&&W.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Iz=H.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&kz!==void 0)Iz=Iz[kz];if(Iz)if(A>=0&&A<=W.width-y&&(T>=0&&T<=W.height-w)){B.bindFramebuffer(E.FRAMEBUFFER,Iz);let Ez=W.textures[Dz],Rz=Ez.format,vz=Ez.type;if(W.textures.length>1)E.readBuffer(E.COLOR_ATTACHMENT0+Dz);let Hz=q0(Ez);if(Hz.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Hz.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gz=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,gz),E.bufferData(E.PIXEL_PACK_BUFFER,Zz.byteLength,E.STREAM_READ),E.readPixels(A,T,y,w,p.convert(Rz),p.convert(vz),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let KJ=d!==null?H.get(d).__webglFramebuffer:null;B.bindFramebuffer(E.FRAMEBUFFER,KJ);let tz=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await M5(E,tz,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,gz),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Zz),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(gz),E.deleteSync(tz),Zz}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(W,A=null,T=0){let y=Math.pow(2,-T),w=Math.floor(W.image.width*y),Zz=Math.floor(W.image.height*y),kz=A!==null?A.x:0,Dz=A!==null?A.y:0;f.setTexture2D(W,0),E.copyTexSubImage2D(E.TEXTURE_2D,T,0,0,kz,Dz,w,Zz),B.unbindTexture()},this.copyTextureToTexture=function(W,A,T=null,y=null,w=0,Zz=0){let kz,Dz,Iz,Ez,Rz,vz,Hz,gz,KJ,tz=W.isCompressedTexture?W.mipmaps[Zz]:W.image;if(T!==null)kz=T.max.x-T.min.x,Dz=T.max.y-T.min.y,Iz=T.isBox3?T.max.z-T.min.z:1,Ez=T.min.x,Rz=T.min.y,vz=T.isBox3?T.min.z:0;else{let QJ=Math.pow(2,-w);if(kz=Math.floor(tz.width*QJ),Dz=Math.floor(tz.height*QJ),W.isDataArrayTexture)Iz=tz.depth;else if(W.isData3DTexture)Iz=Math.floor(tz.depth*QJ);else Iz=1;Ez=0,Rz=0,vz=0}if(y!==null)Hz=y.x,gz=y.y,KJ=y.z;else Hz=0,gz=0,KJ=0;let nz=p.convert(A.format),ZJ=p.convert(A.type),Xz;if(A.isData3DTexture)f.setTexture3D(A,0),Xz=E.TEXTURE_3D;else if(A.isDataArrayTexture||A.isCompressedArrayTexture)f.setTexture2DArray(A,0),Xz=E.TEXTURE_2D_ARRAY;else f.setTexture2D(A,0),Xz=E.TEXTURE_2D;B.activeTexture(E.TEXTURE0),B.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,A.flipY),B.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),B.pixelStorei(E.UNPACK_ALIGNMENT,A.unpackAlignment);let UJ=B.getParameter(E.UNPACK_ROW_LENGTH),bz=B.getParameter(E.UNPACK_IMAGE_HEIGHT),AJ=B.getParameter(E.UNPACK_SKIP_PIXELS),MJ=B.getParameter(E.UNPACK_SKIP_ROWS),jJ=B.getParameter(E.UNPACK_SKIP_IMAGES);B.pixelStorei(E.UNPACK_ROW_LENGTH,tz.width),B.pixelStorei(E.UNPACK_IMAGE_HEIGHT,tz.height),B.pixelStorei(E.UNPACK_SKIP_PIXELS,Ez),B.pixelStorei(E.UNPACK_SKIP_ROWS,Rz),B.pixelStorei(E.UNPACK_SKIP_IMAGES,vz);let lJ=W.isDataArrayTexture||W.isData3DTexture,cz=A.isDataArrayTexture||A.isData3DTexture;if(W.isDepthTexture){let QJ=H.get(W),xJ=H.get(A),sz=H.get(QJ.__renderTarget),_J=H.get(xJ.__renderTarget);B.bindFramebuffer(E.READ_FRAMEBUFFER,sz.__webglFramebuffer),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,_J.__webglFramebuffer);for(let mJ=0;mJ<Iz;mJ++){if(lJ)E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,H.get(W).__webglTexture,w,vz+mJ),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,H.get(A).__webglTexture,Zz,KJ+mJ);E.blitFramebuffer(Ez,Rz,kz,Dz,Hz,gz,kz,Dz,E.DEPTH_BUFFER_BIT,E.NEAREST)}B.bindFramebuffer(E.READ_FRAMEBUFFER,null),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(w!==0||W.isRenderTargetTexture||H.has(W)){let QJ=H.get(W),xJ=H.get(A);B.bindFramebuffer(E.READ_FRAMEBUFFER,zz),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,C);for(let sz=0;sz<Iz;sz++){if(lJ)E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,QJ.__webglTexture,w,vz+sz);else E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,QJ.__webglTexture,w);if(cz)E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,xJ.__webglTexture,Zz,KJ+sz);else E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,xJ.__webglTexture,Zz);if(w!==0)E.blitFramebuffer(Ez,Rz,kz,Dz,Hz,gz,kz,Dz,E.COLOR_BUFFER_BIT,E.NEAREST);else if(cz)E.copyTexSubImage3D(Xz,Zz,Hz,gz,KJ+sz,Ez,Rz,kz,Dz);else E.copyTexSubImage2D(Xz,Zz,Hz,gz,Ez,Rz,kz,Dz)}B.bindFramebuffer(E.READ_FRAMEBUFFER,null),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(cz)if(W.isDataTexture||W.isData3DTexture)E.texSubImage3D(Xz,Zz,Hz,gz,KJ,kz,Dz,Iz,nz,ZJ,tz.data);else if(A.isCompressedArrayTexture)E.compressedTexSubImage3D(Xz,Zz,Hz,gz,KJ,kz,Dz,Iz,nz,tz.data);else E.texSubImage3D(Xz,Zz,Hz,gz,KJ,kz,Dz,Iz,nz,ZJ,tz);else if(W.isDataTexture)E.texSubImage2D(E.TEXTURE_2D,Zz,Hz,gz,kz,Dz,nz,ZJ,tz.data);else if(W.isCompressedTexture)E.compressedTexSubImage2D(E.TEXTURE_2D,Zz,Hz,gz,tz.width,tz.height,nz,tz.data);else E.texSubImage2D(E.TEXTURE_2D,Zz,Hz,gz,kz,Dz,nz,ZJ,tz);if(B.pixelStorei(E.UNPACK_ROW_LENGTH,UJ),B.pixelStorei(E.UNPACK_IMAGE_HEIGHT,bz),B.pixelStorei(E.UNPACK_SKIP_PIXELS,AJ),B.pixelStorei(E.UNPACK_SKIP_ROWS,MJ),B.pixelStorei(E.UNPACK_SKIP_IMAGES,jJ),Zz===0&&A.generateMipmaps)E.generateMipmap(Xz);B.unbindTexture()},this.initRenderTarget=function(W){if(H.get(W).__webglFramebuffer===void 0)f.setupRenderTarget(W)},this.initTexture=function(W){if(W.isCubeTexture)f.setTextureCube(W,0);else if(W.isData3DTexture)f.setTexture3D(W,0);else if(W.isDataArrayTexture||W.isCompressedArrayTexture)f.setTexture2DArray(W,0);else f.setTexture2D(W,0);B.unbindTexture()},this.resetState=function(){l=0,a=0,d=null,B.reset(),Wz.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return s0}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(z){this._outputColorSpace=z;let Q=this.getContext();Q.drawingBufferColorSpace=JJ._getDrawingBufferColorSpace(z),Q.unpackColorSpace=JJ._getUnpackColorSpace()}}export{B2 as warnOnce,mz as warn,sq as setConsoleFunction,o0 as log,oq as getConsoleFunction,rz as error,A5 as createCanvasElement,nq as ZeroStencilOp,cq as ZeroSlopeEnding,d2 as ZeroFactor,mq as ZeroCurvatureEnding,lq as WrapAroundEnding,gq as WireframeGeometry,TQ as WebXRController,uq as WebGPUCoordinateSystem,W$ as WebGLUtils,V$ as WebGLRenderer,OJ as WebGLRenderTarget,tQ as WebGLCubeRenderTarget,s0 as WebGLCoordinateSystem,pq as WebGLArrayRenderTarget,dq as WebGL3DRenderTarget,bq as VideoTexture,_q as VideoFrameTexture,xq as VectorKeyframeTrack,kJ as Vector4,hz as Vector3,IJ as Vector2,KQ as VSMShadowMap,EQ as UnsignedShortType,T1 as UnsignedShort5551Type,f1 as UnsignedShort4444Type,gJ as UnsignedIntType,N5 as UnsignedInt5999Type,NQ as UnsignedInt248Type,D5 as UnsignedInt101111Type,wJ as UnsignedByteType,k2 as UniformsUtils,Gz as UniformsLib,jq as UniformsGroup,hq as Uniform,Tq as Uint8ClampedBufferAttribute,fq as Uint8BufferAttribute,G2 as Uint32BufferAttribute,N2 as Uint16BufferAttribute,vq as UVMapping,Pq as TubeGeometry,Rq as TrianglesDrawMode,Sq as TriangleStripDrawMode,Cq as TriangleFanDrawMode,wq as Triangle,yq as TorusKnotGeometry,Lq as TorusGeometry,Mq as TimestampQuery,Fq as Timer,Oq as TextureUtils,Aq as TextureSource,Eq as TextureLoader,U2 as Texture,Hq as TetrahedronGeometry,D0 as TangentSpaceNormalMap,Iq as TOUCH,Y0 as SubtractiveBlending,L2 as SubtractEquation,kq as StringKeyframeTrack,Xq as StreamReadUsage,Yq as StreamDrawUsage,Vq as StreamCopyUsage,Uq as StereoCamera,Zq as StaticReadUsage,Dq as StaticDrawUsage,Nq as StaticCopyUsage,_2 as SrcColorFactor,j2 as SrcAlphaSaturateFactor,x2 as SrcAlphaFactor,Gq as SpriteMaterial,Bq as Sprite,qq as SpotLightHelper,Wq as SpotLight,Kq as SplineCurve,$q as SphericalHarmonics3,Qq as Spherical,Jq as SphereGeometry,zq as Sphere,e3 as Source,r3 as SkinnedMesh,t3 as SkeletonHelper,a3 as Skeleton,U5 as ShortType,i3 as ShapeUtils,s3 as ShapePath,o3 as ShapeGeometry,n3 as Shape,c3 as ShadowMaterial,TJ as ShaderMaterial,yJ as ShaderLib,Pz as ShaderChunk,m3 as Scene,iz as SRGBTransfer,O5 as SRGBColorSpace,w0 as SIGNED_RG11_EAC_Format,c0 as SIGNED_RED_RGTC1_Format,n0 as SIGNED_RED_GREEN_RGTC2_Format,y0 as SIGNED_R11_EAC_Format,l3 as RingGeometry,M2 as ReverseSubtractEquation,g3 as ReplaceStencilOp,z5 as RepeatWrapping,u3 as RenderTarget3D,p3 as RenderTarget,d3 as RenderObjectRefreshType,S1 as ReinhardToneMapping,h1 as RedIntegerFormat,X5 as RedFormat,b3 as RectAreaLight,_3 as Raycaster,x3 as Ray,D2 as RawShaderMaterial,j1 as RGIntegerFormat,rJ as RGFormat,j3 as RGDepthPacking,RQ as RGB_S3TC_DXT1_Format,I0 as RGB_PVRTC_4BPPV1_Format,H0 as RGB_PVRTC_2BPPV1_Format,F0 as RGB_ETC2_Format,O0 as RGB_ETC1_Format,l0 as RGB_BPTC_UNSIGNED_Format,g0 as RGB_BPTC_SIGNED_Format,h3 as RGBIntegerFormat,Y5 as RGBFormat,T3 as RGBDepthPacking,fQ as RGBA_S3TC_DXT5_Format,vQ as RGBA_S3TC_DXT3_Format,PQ as RGBA_S3TC_DXT1_Format,E0 as RGBA_PVRTC_4BPPV1_Format,A0 as RGBA_PVRTC_2BPPV1_Format,M0 as RGBA_ETC2_EAC_Format,u0 as RGBA_BPTC_Format,h0 as RGBA_ASTC_8x8_Format,T0 as RGBA_ASTC_8x6_Format,f0 as RGBA_ASTC_8x5_Format,v0 as RGBA_ASTC_6x6_Format,P0 as RGBA_ASTC_6x5_Format,R0 as RGBA_ASTC_5x5_Format,S0 as RGBA_ASTC_5x4_Format,C0 as RGBA_ASTC_4x4_Format,p0 as RGBA_ASTC_12x12_Format,d0 as RGBA_ASTC_12x10_Format,_0 as RGBA_ASTC_10x8_Format,x0 as RGBA_ASTC_10x6_Format,j0 as RGBA_ASTC_10x5_Format,b0 as RGBA_ASTC_10x10_Format,x1 as RGBAIntegerFormat,PJ as RGBAFormat,f3 as RGBADepthPacking,gQ as RG11_EAC_Format,F5 as REVISION,m0 as RED_RGTC1_Format,lQ as RED_GREEN_RGTC2_Format,L0 as R11_EAC_Format,v3 as QuaternionLinearInterpolant,P3 as QuaternionKeyframeTrack,R3 as Quaternion,S3 as QuadraticBezierCurve3,C3 as QuadraticBezierCurve,w3 as PropertyMixer,y3 as PropertyBinding,L3 as PositionalAudio,M3 as PolyhedronGeometry,F3 as PolarGridHelper,O3 as PointsMaterial,A3 as Points,E3 as PointLightHelper,H3 as PointLight,I3 as PlaneHelper,k1 as PlaneGeometry,K2 as Plane,XQ as PerspectiveCamera,k3 as Path,cQ as PMREMGenerator,O2 as PCFSoftShadowMap,kQ as PCFShadowMap,E1 as OrthographicCamera,f2 as OneMinusSrcColorFactor,v2 as OneMinusSrcAlphaFactor,P2 as OneMinusDstColorFactor,R2 as OneMinusDstAlphaFactor,C2 as OneMinusConstantColorFactor,y2 as OneMinusConstantAlphaFactor,b2 as OneFactor,X3 as OctahedronGeometry,I2 as ObjectSpaceNormalMap,Y3 as ObjectLoader,V3 as Object3D,U3 as NumberKeyframeTrack,Z3 as NotEqualStencilFunc,p2 as NotEqualDepth,Q5 as NotEqualCompare,D3 as NormalRGPacking,N3 as NormalGAPacking,IQ as NormalBlending,G3 as NormalAnimationBlendMode,CJ as NoToneMapping,B3 as NoNormalPacking,nJ as NoColorSpace,vJ as NoBlending,q3 as NeverStencilFunc,n2 as NeverDepth,B5 as NeverCompare,L1 as NeutralToneMapping,J5 as NearestMipmapNearestFilter,UQ as NearestMipmapLinearFilter,W3 as NearestMipMapNearestFilter,K3 as NearestMipMapLinearFilter,uJ as NearestFilter,X2 as MultiplyOperation,V0 as MultiplyBlending,Y2 as MixOperation,e2 as MirroredRepeatWrapping,t2 as MinEquation,$3 as MeshToonMaterial,Q3 as MeshStandardMaterial,J3 as MeshPhysicalMaterial,z3 as MeshPhongMaterial,eW as MeshNormalMaterial,rW as MeshMatcapMaterial,tW as MeshLambertMaterial,A2 as MeshDistanceMaterial,E2 as MeshDepthMaterial,W2 as MeshBasicMaterial,fJ as Mesh,r2 as MaxEquation,aJ as Matrix4,_z as Matrix3,aW as Matrix2,iW as MathUtils,sW as MaterialLoader,oW as MaterialBlending,nW as Material,cW as MOUSE,mW as LoopRepeat,lW as LoopPingPong,gW as LoopOnce,uW as LoadingManager,pW as LoaderUtils,dW as Loader,P1 as LinearTransfer,R1 as LinearToneMapping,A1 as LinearSRGBColorSpace,SQ as LinearMipmapNearestFilter,oJ as LinearMipmapLinearFilter,bW as LinearMipMapNearestFilter,_W as LinearMipMapLinearFilter,xW as LinearInterpolant,HJ as LinearFilter,jW as LineSegments,hW as LineLoop,TW as LineDashedMaterial,fW as LineCurve3,vW as LineCurve,PW as LineBasicMaterial,RW as Line3,SW as Line,CW as LightShadow,wW as LightProbe,yW as Light,LW as LessStencilFunc,MW as LessEqualStencilFunc,Z0 as LessEqualDepth,aQ as LessEqualCompare,m2 as LessDepth,W5 as LessCompare,H2 as Layers,FW as LatheGeometry,OW as LOD,AW as KeyframeTrack,EW as KeepStencilOp,HW as InvertStencilOp,IW as InterpolationSamplingType,kW as InterpolationSamplingMode,XW as InterpolateSmooth,YW as InterpolateLinear,VW as InterpolateDiscrete,UW as InterpolateBezier,ZW as Interpolant,DW as InterleavedBufferAttribute,NW as InterleavedBuffer,H1 as IntType,GW as Int8BufferAttribute,BW as Int32BufferAttribute,qW as Int16BufferAttribute,WW as InstancedMesh,KW as InstancedInterleavedBuffer,$W as InstancedBufferGeometry,QW as InstancedBufferAttribute,JW as IncrementWrapStencilOp,zW as IncrementStencilOp,eK as ImageUtils,rK as ImageLoader,tK as ImageBitmapLoader,aK as IcosahedronGeometry,iK as HemisphereLightHelper,sK as HemisphereLight,hJ as HalfFloatType,oK as HTMLTexture,nK as Group,cK as GridHelper,mK as GreaterStencilFunc,lK as GreaterEqualStencilFunc,g2 as GreaterEqualDepth,iQ as GreaterEqualCompare,u2 as GreaterDepth,$5 as GreaterCompare,N0 as GLSL3,gK as GLSL1,uK as GLBufferAttribute,pK as FrustumArray,v1 as Frustum,BQ as FrontSide,dK as FramebufferTexture,bK as FogExp2,_K as Fog,bJ as FloatType,G0 as Float32BufferAttribute,xK as Float16BufferAttribute,jK as FileLoader,hK as ExtrudeGeometry,_1 as ExternalTexture,k5 as EventDispatcher,TK as Euler,CQ as EquirectangularRefractionMapping,wQ as EquirectangularReflectionMapping,fK as EqualStencilFunc,l2 as EqualDepth,K5 as EqualCompare,vK as EllipseCurve,PK as EdgesGeometry,RK as DynamicReadUsage,SK as DynamicDrawUsage,CK as DynamicCopyUsage,h2 as DstColorFactor,T2 as DstAlphaFactor,RJ as DoubleSide,wK as DodecahedronGeometry,yK as DiscreteInterpolant,LK as DirectionalLightHelper,MK as DirectionalLight,FK as DetachedBindMode,HQ as DepthTexture,sJ as DepthStencilFormat,eJ as DepthFormat,OK as DefaultLoadingManager,AK as DecrementWrapStencilOp,EK as DecrementStencilOp,HK as DataUtils,IK as DataTextureLoader,E5 as DataTexture,F1 as DataArrayTexture,Z2 as Data3DTexture,kK as Cylindrical,XK as CylinderGeometry,M1 as CustomToneMapping,i2 as CustomBlending,YK as CurvePath,VK as Curve,o2 as CullFaceNone,UK as CullFaceFrontBack,s2 as CullFaceFront,U0 as CullFaceBack,ZK as CubicInterpolant,DK as CubicBezierCurve3,NK as CubicBezierCurve,AQ as CubeUVReflectionMapping,GK as CubeTextureLoader,O1 as CubeTexture,tJ as CubeRefractionMapping,GQ as CubeReflectionMapping,F2 as CubeDepthTexture,q2 as CubeCamera,BK as Controls,S2 as ConstantColorFactor,w2 as ConstantAlphaFactor,qK as ConeGeometry,WK as CompressedTextureLoader,KK as CompressedTexture,$K as CompressedCubeTexture,QK as CompressedArrayTexture,JK as Compatibility,JJ as ColorManagement,zK as ColorKeyframeTrack,ez as Color,e$ as Clock,mQ as ClampToEdgeWrapping,r$ as CircleGeometry,C1 as CineonToneMapping,t$ as CatmullRomCurve3,a$ as CapsuleGeometry,i$ as CanvasTexture,s$ as CameraHelper,o$ as Camera,n$ as Cache,Z5 as ByteType,c$ as BufferGeometryLoader,OQ as BufferGeometry,uQ as BufferAttribute,m$ as BoxHelper,sQ as BoxGeometry,l$ as Box3Helper,g$ as Box3,u$ as Box2,p$ as BooleanKeyframeTrack,d$ as Bone,b$ as BezierInterpolant,_$ as BatchedMesh,x$ as BasicShadowMap,j$ as BasicDepthPacking,EJ as BackSide,h$ as AxesHelper,T$ as AudioLoader,f$ as AudioListener,v$ as AudioContext,P$ as AudioAnalyser,R$ as Audio,S$ as AttachedBindMode,C$ as ArrowHelper,I5 as ArrayCamera,w$ as ArcCurve,y$ as AnimationUtils,L$ as AnimationObjectGroup,M$ as AnimationMixer,F$ as AnimationLoader,O$ as AnimationClip,A$ as AnimationAction,E$ as AmbientLight,H$ as AlwaysStencilFunc,c2 as AlwaysDepth,q5 as AlwaysCompare,V5 as AlphaFormat,y1 as AgXToneMapping,X0 as AdditiveBlending,I$ as AdditiveAnimationBlendMode,V2 as AddOperation,JQ as AddEquation,w1 as ACESFilmicToneMapping};
