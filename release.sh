dist="dist"
name=$(node -p "require('./package.json').name")
version=$(node -p "require('./package.json').version")
server="https://discord.com/invite/gud55BjNFC"
releases="https://github.com/FancyStudioTeam/OceanicBuilders/releases"

echo "📦 Package: '$name'"
echo "🔄 Version: '$version'"

if [ -d $dist ]; then
  rm -rf $dist
  echo "🧹 Removed '$dist' directory"
else
  echo "🤷 Directory '$dist' not found"
fi

npm run biome --silent
if [ "$?" -eq 0 ]; then
  echo "✅ Corrections applied with Biome"
else
  echo "❌ Unable to apply corrections with Biome"
fi

npm run build --silent
if [ $? -eq 0 ]; then
  echo "✅ TypeScript compilation completed"
else
  echo "❌ Unable to compile files with TSX"
  exit 1
fi

npm publish --silent
if [ $? -eq 0 ]; then
  echo "✅ Package $name has been released"
else
  echo "❌ Unable to release the package"
  exit 1
fi

npm deprecate $name@"< $version" "Changelog: $releases" --silent
if [ $? -eq 0 ]; then
  echo "✅ Versions before $version have been deprecated"
else
  echo "❌ Unable to deprecate previous versions"
fi

exit 0