@echo off
echo ----------------------------
echo Atualizando repositorio...
echo ----------------------------

git add .
git commit -m "nova versao"
git push

echo ----------------------------
echo Finalizado!
pause
