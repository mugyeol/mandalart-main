const token = localStorage.getItem("access_token");

export function fetchPost(url) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify({
      access_token: token,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return { msg: "fail" };
    }
  });
}

export function fetchPatch(url) {
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify({
      access_token: token,
    }),
  }).then((res) => {
    return res.json();
  });
}
