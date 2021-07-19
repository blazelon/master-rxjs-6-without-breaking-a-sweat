import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { flatMap, map, switchMap, tap } from 'rxjs/operators';

const btnAjax = document.getElementById('btnAjax');
const result = document.getElementById('result');

const url =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

fromEvent(btnAjax, 'click')
  .pipe(
    tap(() => (result.innerHTML = '')),
    switchMap(() =>
      ajax.getJSON(url).pipe(
        map((e) => e.value),
        flatMap((e) => e)
      )
    )
  )
  .subscribe((data) => {
    const li = document.createElement('li');
    li.textContent = data.joke;
    result.appendChild(li);
  });

/*






















*/

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
