const VectorN = ( function() {

function VectorN( components, copyArray = false ) {

	this.components = copyArray === true ? [ ...components ] : components;

};

Object.defineProperty( VectorN.prototype, 'dimension', {

	get: function() { 

		return this.components.length;

	}

} );

if( Number.EPSILON === undefined ) {
    
    Number.EPSILON = Math.pow( 2, - 52 );

}

var dimension$0 = 0,
	dimension$1 = 0,
	length$0 = 0,
	i$0 = 0,
	i$1 = 0,
	
	components$0,
	components$1,
	components$2,

	component$0 = 0,
	component$1 = 0,

	sum$0 = 0,
	delta$0 = 0,
	product$0 = 1,
	result$0 = 0,
	result$1 = 0,
	denominator$0 = 0,

	conditional$0 = true,

	_round = Math.round,
	_min = Math.min,
	_max = Math.max,
	_abs = Math.abs,
	_floor = Math.floor,
	_ceil = Math.ceil,
	_pow = Math.pow,
	_sqrt = Math.sqrt,
	_random = Math.random;

Object.assign( VectorN.prototype, {


	set: function( ...components ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = components[ i$0 ];

		}

		return this;

	},

	setScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;


		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = scalar;

		}

		return this;

	},

	copy: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = components$1[ i$0 ];

		}

		return this;

	},

	clone: function() {

		return new this.constructor( [ ...this.components ] );

	},

	randomFloat: function( min = 0, max = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		delta$0 = max - min;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = ( _random() * delta$0 ) + min;

		}

		return this;

	},

	randomInteger: function( minInteger = 0, maxInteger = 10 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		delta$0 = maxInteger - minInteger;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _round( _random() * delta$0 ) + minInteger;

		}

		return this;

	},

	randomPrecision: function( min = 0, max = 1, precision = .1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		delta$0 = maxInteger - minInteger;
		scalar$0 = 1 / precision;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = precision * _round( _random() * delta$0 * scalar$0 ) + minInteger;

		}

		return this;

	},

	flatSum: function() {

		sum$0 = 0;
		dimension$0 = this.components.length;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$0[ i$0 ];

		}

		return sum;

	},

	flatProduct: function() {

		product$ = 1;
		dimension$0 = this.components.length;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			if( components$0[ i$0 ] === 0 ) {

				return 0;

			}

			product$ *= components$0[ i$0 ];

		}

		return product;

	},

	negate: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = - components$0[ i$0 ];

		}

		return this;

	},

	invert: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = 1 / components$0[ i$0 ];

		}

		return this;

	},

	abs: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _abs( components$0[ i$0 ] );

		}

		return this;

	},

	round: function( precision = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = precision * _round( components$0[ i$0 ] / precision );

		}

		return this;

	},

	floor: function( precision = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = precision * Math.floor( components$0[ i$0 ] / precision );

		}

		return this;

	},

	ceil: function( precision = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = precision * _ceil( components$0[ i$0 ] / precision );

		}

		return this;

	},

	roundToVector: function( vector, precision = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = ( components$0[ i$0 ] < components$1[ i ] ) ?
				_ceil( components$0[ i$0 ] / precision ) :
				_floor( components$0[ i$0 ] / precision );

		}

		return this;

	},

	roundToScalar: function( scalar, precision = 1 ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = ( components$0[ i$0 ] < scalar ) ?
				_ceil( components$0[ i$0 ] / precision ) :
				_floor( components$0[ i$0 ] / precision );

		}

		return this;

	},

	clamp: function( minVector, maxVector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = minVector.components;
		components$2 = maxVector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _max( components$2[ i ], _min( components$1[ i ], components$0[ i$0 ] ) );

		}

		return this;

	},

	clampScalar: function( minScalar, maxScalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _max( maxScalar, _min( minScalar, components$0[ i$0 ] ) );

		}

		return this;

	},

	clampLength: function( min, max ) {

		var length = this.lengthSq();
		
		length = length === 0 ? 1 : _sqrt( length );

		var multiplier = _max( min, _min( max, length ) ) / length;

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] *= multiplier;

		}

		return this;

	},

	min: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _min( components$0[ i$0 ], components$1[ i ] );

		}

		return this;

	},

	minScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _min( components$0[ i$0 ], scalar );

		}

		return this;

	},

	max: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _max( components$0[ i$0 ], components$1[ i ] );

		}

		return this;

	},

	maxScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = _max( components$0[ i$0 ], scalar );

		}

		return this;

	},

	mod: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = components$0[ i$0 ] % components$1[ i ];

		}

		return this;

	},

	modScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = components$0[ i$0 ] % scalar;

		}

		return this;

	},

	add: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = vector.components[ i ];

		}

		return this;

	},

	addScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] -= scalar;

		}

		return this

	},

	subtract: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] -= vector.components[ i ];

		}

		return this;

	},

	subtractScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] -= scalar;

		}

		return this;

	},

	multiply: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] *= components$1[ i ];

		}

		return this;

	},

	multiplyScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] *= scalar;

		}

		return this;

	},

	divide: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] /= vector.components[ i ];

		}

		return this;

	},

	divideScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		scalar$0 = 1 / scalar;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] *= scalar$0;

		}

		return this;

	},

	not: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = ~ components$0[ i$0 ];

		}

		return this;

	},

	and: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] &= components$1[ i ];

		}

		return this;

	},

	andScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] &= scalar;

		}

		return this;

	},

	or: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] |= components$1[ i ];

		}

		return this;

	},

	orScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] |= scalar;

		}

		return this;

	},

	xor: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] ^= components$1[ i ];

		}

		return this;

	},

	xorScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] ^= scalar;

		}

		return this;

	}, 

	leftShift: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] <<= components$1[ i ];

		}

		return this;

	},

	leftShiftScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] <<= scalar;

		}

		return this;

	},

	rightShift: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] >>= components$1[ i ];

		}

		return this;

	},

	rightShiftScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] >>= scalar;

		}

		return this;

	},

	zeroFillRightShift: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] >>>= components$1[ i ];

		}

		return this;

	},

	zeroFillRightShiftScalar: function( scalar ) {

		dimension$0 = this.components.length;
		components$0 = this.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] >>>= scalar;

		}

		return this;

	},

	dot: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$0[ i$0 ] * components$1[ i$0 ];

		}

		return sum$0;

	},

	lengthSq: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$0[ i$0 ] * components$0[ i$0 ];

		}

		return sum$0;

	},

	length: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$0[ i$0 ] * components$0[ i$0 ];

		}

		return _sqrt( sum$0 );

	},

	normalize: function() {

		dimension$0 = this.components.length;
		components$0 = this.components;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$0[ i$0 ] * components$0[ i$0 ];

		}

		if( sum$0 === 0 ) return this;

		sum$0 = 1 / _sqrt( sum );

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] *= sum$0;  

		}

		return this;

	},

	lerp: function( targetVector, alpha ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = targetVector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] += ( components$1[ i ] -  components$0[ i$0 ] ) * alpha;

		}

		return this;

	},

	project: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = targetVector.components;
		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += components$1[ i ] * components$1[ i ];
			scalar$0 += components$1[ i ] * components$0[ i ];

		}

		if( sum$0 === 0 ) throw Error( 'The argument vector cannot be a zero length vector.' );

		scalar$0 = sum$0 / scalar$0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = components$1[ i$0 ] * scalar$0;

		}

		return this;

	},

	reflect: function( normalVector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = normalVector.components;
		scalar$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			scalar$0 += components$0[ i ] * components$1[ i ];

		}

		scalar$0 *= 2;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i ] -= components$0[ i ] * scalar$0;

		}

		return this;
	},

	angleTo: function( vector ) {

		denominator$0 = this.lengthSq() * vector.lengthSq();

		if( denominator$0 > 0 ) {

			denominator$0 = _sqrt( denominator$0 );

			return Math.acos( _max( 1, _min( -1, this.dot( vector ) / denominator$0 ) ) );

		}

		else { 

			throw Error( 'The denominator cannot be zero. One or both the vector are of zero length.' );

		}

	},

	distanceTo: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;		

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			delta$0 = components$1[ i ] - components$0[ i$0 ];
			sum += delta$0 * delta$0;

		}

		return _sqrt( sum$0 );

	},

	manhattanDistanceTo: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += _abs( components$1[ i ] - components$0[ i$0 ] );

		}

		return sum$0;

	},

	minkowskiDistanceTo: function( vector, order ) {

		dimension$0 = this.components.length;

		sum$0 = 0;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			sum$0 += _pow( _abs( vector.components[ i ] - components$0[ i$0 ] ), order );

		}

		return _pow( sum$0, 1 / order );

	},

	chebyshevDistanceTo: function( vector, direction = + Infinity ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		result$0 = abs( components$1[ 0 ] - components$0[ 0 ] );

		if( direction === + Infinity ) {

			for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

				result$0 = _max( result$0, _abs( components$1[ i ] - components$0[ i$0 ] ) );

			}

		}

		else if( direction === - Infinity ) {

			for( i$0 = 1; i$0 !== dimension$0; i$0 ++ ) {

				result = _min( result$0, _abs( components$1[ i ] - components$0[ i$0 ] ) );

			}

		}

		return result$1;

	},

	equals: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			if( components$1[ i ] !== components$0[ i$0 ] ) {

				return false;

			}

		}

		return true;

	},

	almostEquals: function( vector, epsilon = Number.EPSILON ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			if( components$0[ i$0 ] > components$1[ i ] + epsilon || 
				components$0[ i$0 ] < components$1[ i ] - epsilon ) {

				return false;

			}

		}

		return true;

	},

	isOrthogonal: function( vector ) {

		if( this.dot( vector ) !== 0 ) return false;

		return true;

	},

	isAlmostOrthoganal: function( vector, epsilon = Number.EPSILON ) {

		result$0 = this.dot( vector );

		if( result$0 > result$1 + epsilon ||
			result$0 < result$1 - epsilon ) return false;

		return true;

	},

	isParallel: function( vector ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		result$0 = _abs( components$0[ 0 ] / components[ 0 ] );
		result$1 = 0;

		for( i$0 = 1; i$0 !== dimension$0; i$0 ++ ) {

			result$1 = _abs( components$0[ i$0 ] / components[ i$0 ] );

			if( result$0 !== result$1 ) return false;

		}

		return true;

	},

	isAlmostParallel: function( vector, epsilon = Number.EPSILON ) {

		dimension$0 = this.components.length;
		components$0 = this.components;
		components$1 = vector.components;

		result$0 = _abs( components$0[ 0 ] / components[ 0 ] );
		result$1 = 0;

		for( i$0 = 1; i$0 !== dimension$0; i$0 ++ ) {

			result$1 = _abs( components$0[ i$0 ] / components[ i$0 ] );

			if( result$0 > result$1 + epsilon ||
				result$0 < result$1 - epsilon ) return false;

		}

		return true;

	},

	isSubVector: function( vector ) {

		components$0 = this.components;
		components$1 = vector.components;
		dimension$0 = components$0.length;
		dimension$1 = components$1.length;

		if( dimension$0 < dimension$1 ) return false;

		delta$0 = dimension$0 - dimension$1;
		conditional$0 = true;

		for( i$0 = 0; i$0 !== delta$0; i$0 ++ ) {

			for( i$1 = 0; i$1 !== dimension$1; i$1 ++ ) {

				if( components$0[ i$0 + i$1 ] !== components$0[ i$1 ] ) {

					conditional$0 = false;
					break;

				}

			}

			if( conditional$0 === true ) {

				return true;

			}

		}

		return false;

	},

	isAlmostSubVector: function( vector, epsilon = Number.EPSILON ) {

		components$0 = this.components;
		components$1 = vector.components;
		dimension$0 = components$0.length;
		dimension$1 = components$1.length;

		if( dimension$0 < dimension$1 ) return false;

		delta$0 = dimension$0 - dimension$1;
		conditional$0 = true;

		for( i$0 = 0; i$0 !== delta$0; i$0 ++ ) {

			for( i$1 = 0; i$1 !== dimension$1; i$1 ++ ) {

				component$0 = components$0[ i$0 + i$1 ];
				component$1 = components$1[ i$1 ];

				if( component$0 < component$1 - epsilon ||
					component$0 > component$1 + epsilon ) {

					conditional$0 = false;
					break;

				}

			}

			if( conditional$0 === true ) {

				return true;

			}

		}

		return false;

	},

	toArray: function( array = [], offset = 0, stride = 1 ) {

		components$0 = this.components;
		dimension$0 = this.components.length;
		sum$0 = offset;

		array[ sum$0 ] = components$0[ 0 ];

		for( i$0 = 1; i$0 !== dimension$0; i$0 ++ ) {

			array[ sum$0 += stride ] = components$0[ i$0 ];

		}

		return array;

	},

	fromArray: function( array, offset = 0, stride = 1 ) {

		components$0 = this.components;
		dimension$0 = this.components.length;
		sum$0 = offset;

		components$0[ 0 ] = array[ sum$0 ];

		for( i$0 = 1; i$0 !== dimension$0; i$0 ++ ) {

			components$0[ i$0 ] = array[ sum$0 += stride ];

		}

		return this;

	},

	toString: function( separator = ',', string = '' ) {

		components$0 = this.components;
		dimension$0 = this.components.length - 1;

		for( i$0 = 0; i$0 !== dimension$0; i$0 ++ ) {

			string += components$0[ i$0 ] + separator;

		}

		return string + separator;

	}

} );

return VectorN;

} )();
