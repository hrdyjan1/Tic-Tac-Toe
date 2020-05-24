
interface hasEmail {
    email: string
}

function hasEmail(x: any): x is hasEmail {
  return typeof x.email !== 'undefined';
}

function isDefined<T>(x: T | undefined): x is T {
  return typeof x !== 'undefined';
}

function foo(tmp: any): void {
  if (!isDefined(tmp)) {
    console.log(tmp, 'isUndefined');
  } else if (hasEmail(tmp)) {
    console.log(tmp, 'hasMail');
  } else {
    console.log(tmp);
  }
}
foo(undefined);

// function foo(var: any): void {
//       console.log(var.email);
//       throw new Error(`Unreachable error, var ${var}`);
//     }
// }

export default 'remove';
