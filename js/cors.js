var xhr = new XMLHttpRequest()
        xhr.open('POST', '../Data/FetchData', true)
        xhr.withCredentials = true
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 2) {// do something}
        }
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(json)