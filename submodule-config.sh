# git submodule add https://github.com/cosmos/cosmos-sdk.git cosmos-sdk
# git submodule add https://github.com/cosmos/ibc-go.git ibc-go
# git commit -m "feat: submodule add"

cd cosmos-sdk
git config core.sparsecheckout true
echo proto/              > ../.git/modules/cosmos-sdk/info/sparse-checkout
echo third_party/proto/ >> ../.git/modules/cosmos-sdk/info/sparse-checkout
git read-tree -mu HEAD

cd ..

cd ibc-go
git config core.sparsecheckout true
echo proto/              > ../.git/modules/ibc-go/info/sparse-checkout
echo third_party/proto/ >> ../.git/modules/ibc-go/info/sparse-checkout
git read-tree -mu HEAD

cd ..