## Getting Started

```
> cd $(xcode-select -p)/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks/Ruby.framework/Versions/Current/usr/include/ruby-2.*
> sudo ln -s universal-darwin24 universal-darwin23
> sudo arch -arm64 gem install ffi
> sudo bundle install
> bundle exec jekyll serve
> bundle exec jekyll build
> cp ../jasper-pages ./
```

## Changing CSS

```
> npm install
> npm run gulp
```
