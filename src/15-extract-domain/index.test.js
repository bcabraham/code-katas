const assert = require("chai").assert;
const { domainName } = require("./index");

describe("domainName()", function() {
  it("should return the domain from a given URL", function() {
    assert.strictEqual(domainName("http://google.com"), "google");
    assert.strictEqual(domainName("http://google.co.jp"), "google");
    assert.strictEqual(domainName("https://123.net"), "123");
    assert.strictEqual(domainName("https://hyphen-site.org"), "hyphen-site");
    assert.strictEqual(domainName("http://codewars.com"), "codewars");
    assert.strictEqual(domainName("www.xakep.ru"), "xakep");
    assert.strictEqual(domainName("https://youtube.com"), "youtube");
    assert.strictEqual(domainName("http://www.codewars.com/kata/"), "codewars");
    assert.strictEqual(domainName("icann.org"), "icann");
    assert.strictEqual(
      domainName("https://www.0570ptmb3064qxmph4zfq5z-fioe0.info/img/"),
      "0570ptmb3064qxmph4zfq5z-fioe0"
    );
    assert.strictEqual(
      domainName("https://a3t6xm1fs6-3qc.fr"),
      "a3t6xm1fs6-3qc"
    );
    assert.strictEqual(
      domainName("https://www.sjcow8s.net/index.php"),
      "sjcow8s"
    );
    assert.strictEqual(domainName("http://6-amdqpn.com/warez/"), "6-amdqpn");
    assert.strictEqual(
      domainName("https://www.0vcsydj39rw6v5mff.pro/img/"),
      "0vcsydj39rw6v5mff"
    );
    assert.strictEqual(domainName("http://www.lvxw7yn.org/error"), "lvxw7yn");
    assert.strictEqual(domainName("1llzql825ugu.net/users"), "1llzql825ugu");
    assert.strictEqual(
      domainName("https://d3w-owbmgip4zcv5oq8pq01er0o.edu/archive/"),
      "d3w-owbmgip4zcv5oq8pq01er0o"
    );
    assert.strictEqual(
      domainName("http://f-v3f4m3u8-rdpycl9ru8.co.za/users"),
      "f-v3f4m3u8-rdpycl9ru8"
    );
    assert.strictEqual(
      domainName("https://www.zp7917f8j6g8m5.tv/warez/"),
      "zp7917f8j6g8m5"
    );
    assert.strictEqual(
      domainName("http://www.i5f28nw-t-moo.it/img/"),
      "i5f28nw-t-moo"
    );
    assert.strictEqual(domainName("http://www.imylsi7bhh.name/"), "imylsi7bhh");
    assert.strictEqual(domainName("ndaljfqf4v.jp/error"), "ndaljfqf4v");
    assert.strictEqual(
      domainName("https://www.1876kixfpa7zpfmr9hwf.co.za/"),
      "1876kixfpa7zpfmr9hwf"
    );
    assert.strictEqual(
      domainName("https://www.x-952d0b6q.fr/img/"),
      "x-952d0b6q"
    );
    assert.strictEqual(
      domainName("https://jb26c6f0oai361.com/users"),
      "jb26c6f0oai361"
    );
    assert.strictEqual(
      domainName("https://www.qv3bfjx35d0lddv9x9.org/index.php"),
      "qv3bfjx35d0lddv9x9"
    );
    assert.strictEqual(
      domainName("http://www.vbyifp4cc6esfw64f91ce.fr/"),
      "vbyifp4cc6esfw64f91ce"
    );
    assert.strictEqual(
      domainName("http://5r9knmcq2a.name/users"),
      "5r9knmcq2a"
    );
    assert.strictEqual(
      domainName("https://l3ntwtal8b-6sej15kyn6m1.pro/img/"),
      "l3ntwtal8b-6sej15kyn6m1"
    );
    assert.strictEqual(
      domainName("https://www.5-ngcf58js3wf7bg2zv.fr/default.html"),
      "5-ngcf58js3wf7bg2zv"
    );
    assert.strictEqual(
      domainName("https://i-wxj-p99ih0d5itnw2u3al9-p.co.uk/index.php"),
      "i-wxj-p99ih0d5itnw2u3al9-p"
    );
    assert.strictEqual(
      domainName("http://www.3inmyu5klc4t3rbidr40hw4fag4oq5.br"),
      "3inmyu5klc4t3rbidr40hw4fag4oq5"
    );
    assert.strictEqual(
      domainName("http://wnsh49v40f6srshdj.co.uk/img/"),
      "wnsh49v40f6srshdj"
    );
    assert.strictEqual(
      domainName("https://7xgmdhzkco.net/users"),
      "7xgmdhzkco"
    );
    assert.strictEqual(
      domainName("https://www.92og3jayh07eiocqa06.co/users"),
      "92og3jayh07eiocqa06"
    );
    assert.strictEqual(
      domainName("9-x07g5a4xcepl7yf5b.com/"),
      "9-x07g5a4xcepl7yf5b"
    );
    assert.strictEqual(
      domainName("http://lzmq0cehhmspw88d2jcc8e1ga.jp/"),
      "lzmq0cehhmspw88d2jcc8e1ga"
    );
    assert.strictEqual(domainName("j2ny3yaf553.it/"), "j2ny3yaf553");
    assert.strictEqual(
      domainName("https://www.r6vq2wj1bevhtyiwujzw0rlgd.biz/error"),
      "r6vq2wj1bevhtyiwujzw0rlgd"
    );
    assert.strictEqual(
      domainName("9q2lz828a8pam5id3vzv00gdp3s.biz/archive/"),
      "9q2lz828a8pam5id3vzv00gdp3s"
    );
    assert.strictEqual(
      domainName("2tzd8j6k0qeza2zgammw6wbp4i.com"),
      "2tzd8j6k0qeza2zgammw6wbp4i"
    );
    assert.strictEqual(
      domainName("http://www.44a7ul8bunwpzlp678wtewb.tv/default.html"),
      "44a7ul8bunwpzlp678wtewb"
    );
    assert.strictEqual(domainName("http://em9v9.de/error"), "em9v9");
    assert.strictEqual(
      domainName("https://www.z5t8rxi6eyjsaeev79rkkyiv19s.info/warez/"),
      "z5t8rxi6eyjsaeev79rkkyiv19s"
    );
    assert.strictEqual(
      domainName("dyf2ycza1u7vyqg-zlpea0.fr/img/"),
      "dyf2ycza1u7vyqg-zlpea0"
    );
    assert.strictEqual(
      domainName("https://bh92pr7bd5jeu14.com/warez/"),
      "bh92pr7bd5jeu14"
    );
    assert.strictEqual(domainName("https://hhnwgou.io/error"), "hhnwgou");
    assert.strictEqual(domainName("7y02iu.name/index.php"), "7y02iu");
    assert.strictEqual(
      domainName("https://hllvyprg-urys2xk.net"),
      "hllvyprg-urys2xk"
    );
    assert.strictEqual(domainName("http://google.com"), "google");
    assert.strictEqual(domainName("http://google.com"), "google");
  });
});
