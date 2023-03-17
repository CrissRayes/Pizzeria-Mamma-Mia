const formatCurrency = ( value ) => {
  return new Intl.NumberFormat( 'es-CL', {
    style: 'currency',
    currency: 'CLP',
  } ).format( value );
}

export default formatCurrency