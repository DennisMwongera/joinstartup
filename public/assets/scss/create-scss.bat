@echo off
setlocal

:: Define the root folder
set ROOT=sass

:: Create directories
mkdir %ROOT%
mkdir %ROOT%\abstracts
mkdir %ROOT%\base
mkdir %ROOT%\utilities
mkdir %ROOT%\components
mkdir %ROOT%\layout
mkdir %ROOT%\pages
mkdir %ROOT%\themes
mkdir %ROOT%\vendors

:: Create files in abstracts
echo /* _variables.scss */ > %ROOT%\abstracts\_variables.scss
echo /* _media-query.scss */ > %ROOT%\abstracts\_media-query.scss
echo /* _colors.scss */ > %ROOT%\abstracts\_colors.scss
echo /* _index.scss */ > %ROOT%\abstracts\_index.scss

:: Create files in base
echo /* _base.scss */ > %ROOT%\base\_base.scss
echo /* _reset.scss */ > %ROOT%\base\_reset.scss
echo /* _index.scss */ > %ROOT%\base\_index.scss

:: Create files in utilities
echo /* _main.scss */ > %ROOT%\utilities\_main.scss
echo /* _container.scss */ > %ROOT%\utilities\_container.scss
echo /* _exceptions.scss */ > %ROOT%\utilities\_exceptions.scss
echo /* _index.scss */ > %ROOT%\utilities\_index.scss

:: Create files in components
echo /* _buttons.scss */ > %ROOT%\components\_buttons.scss
echo /* _carousel.scss */ > %ROOT%\components\_carousel.scss
echo /* _dropdown.scss */ > %ROOT%\components\_dropdown.scss
echo /* _index.scss */ > %ROOT%\components\_index.scss

:: Create files in layout
echo /* _header.scss */ > %ROOT%\layout\_header.scss
echo /* _sidebar.scss */ > %ROOT%\layout\_sidebar.scss
echo /* _footer.scss */ > %ROOT%\layout\_footer.scss
echo /* _index.scss */ > %ROOT%\layout\_index.scss

:: Create files in pages
echo /* _about.scss */ > %ROOT%\pages\_about.scss
echo /* _contact.scss */ > %ROOT%\pages\_contact.scss
echo /* _index.scss */ > %ROOT%\pages\_index.scss

:: Create files in themes
echo /* _theme.scss */ > %ROOT%\themes\_theme.scss
echo /* _admin.scss */ > %ROOT%\themes\_admin.scss
echo /* _index.scss */ > %ROOT%\themes\_index.scss

:: Create files in vendors
echo /* _bootstrap.scss */ > %ROOT%\vendors\_bootstrap.scss
echo /* _modern-reset.scss */ > %ROOT%\vendors\_modern-reset.scss
echo /* _index.scss */ > %ROOT%\vendors\_index.scss

:: Create the main style.scss file
echo /* style.scss */ > %ROOT%\style.scss

echo Folder structure created successfully.
endlocal
pause
