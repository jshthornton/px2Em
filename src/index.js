import isFinite from 'lodash.isfinite';

const px2Em = (px, requestedOptions) => {
  if (isFinite(px) === false) {
    throw new TypeError('`px` should be a number');
  }

  const defaultOptions = {
    base: 16,
    format: null,
  };

  const options = {
    ...defaultOptions,
    ...requestedOptions,
  };

  const {
    base,
    format,
  } = options;

  if (isFinite(base) === false || base < 0) {
    throw new TypeError('`base` should be a number greater than zero');
  }

  const em = Math.round((px / base) * 1000) / 1000;

  if (format == null) {
    return em;
  }

  return `${em}${format}`;
};

export default px2Em;