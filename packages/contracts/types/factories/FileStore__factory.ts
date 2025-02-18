/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FileStore, FileStoreInterface } from "../FileStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IContentStore",
        name: "_contentStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyFile",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "FileNotFound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "FilenameExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "filename",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "FileCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "FileDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contentStore",
    outputs: [
      {
        internalType: "contract IContentStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
      {
        internalType: "bytes32[]",
        name: "checksums",
        type: "bytes32[]",
      },
    ],
    name: "createFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "pointer",
                type: "address",
              },
            ],
            internalType: "struct Content[]",
            name: "contents",
            type: "tuple[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
      {
        internalType: "bytes32[]",
        name: "checksums",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "createFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "pointer",
                type: "address",
              },
            ],
            internalType: "struct Content[]",
            name: "contents",
            type: "tuple[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "deleteFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "fileExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "getChecksum",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "getFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "pointer",
                type: "address",
              },
            ],
            internalType: "struct Content[]",
            name: "contents",
            type: "tuple[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161117438038061117483398101604081905261002f916100c0565b61003833610049565b6001600160a01b03166080526100f0565b600180546001600160a01b031916905561006d81610070602090811b6105de17901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100d257600080fd5b81516001600160a01b03811681146100e957600080fd5b9392505050565b60805161104d61012760003960008181610102015281816104b301528181610729015281816108070152610924015261104d6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639bccd6ad1161008c578063e0876aa811610066578063e0876aa8146101c9578063e30c3978146101dc578063e7755761146101ed578063f2fde38b1461021857600080fd5b80639bccd6ad14610172578063a52e640e14610195578063a9910054146101b657600080fd5b80631eb8bc4e146100d45780633a6e674c146100fd578063715018a61461013c57806379ba5097146101465780638da5cb5b1461014e578063972079921461015f575b600080fd5b6100e76100e2366004610c08565b61022b565b6040516100f49190610c6c565b60405180910390f35b6101247f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100f4565b610144610263565b005b610144610277565b6000546001600160a01b0316610124565b6100e761016d366004610cd9565b6102f6565b610185610180366004610d75565b610361565b60405190151581526020016100f4565b6101a86101a3366004610d75565b61038f565b6040519081526020016100f4565b6101446101c4366004610d75565b6103d8565b6100e76101d7366004610d75565b610441565b6001546001600160a01b0316610124565b6101a86101fb366004610d75565b805160208183018101805160028252928201919093012091525481565b610144610226366004610dbf565b61056d565b60408051808201825260008082526060602080840191909152835191825281019092529061025c90849084906102f6565b9392505050565b61026b61062e565b6102756000610688565b565b60015433906001600160a01b031681146102ea5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084015b60405180910390fd5b6102f381610688565b50565b6040805180820190915260008152606060208201526000801b60028560405161031f9190610e0c565b9081526020016040518091039020541461034e57836040516301856ec560e51b81526004016102e19190610e54565b6103598484846106a1565b949350505050565b60008060001b6002836040516103779190610e0c565b90815260200160405180910390205414159050919050565b60006002826040516103a19190610e0c565b908152604051908190036020019020549050806103d35781604051630b5d665f60e31b81526004016102e19190610e54565b919050565b6103e061062e565b6002816040516103f09190610e0c565b9081526040519081900360200181206000905561040e908290610e0c565b604051908190038120907f584fb2b00bcb43e608b5efabffaa6c6037e3f5fd1a3ec96ea172ada6056d617490600090a250565b60408051808201909152600081526060602082015260006002836040516104689190610e0c565b9081526040519081900360200190205490508061049a5782604051630b5d665f60e31b81526004016102e19190610e54565b6040516306fc89ab60e21b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631bf226ac90602401602060405180830381865afa158015610502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105269190610e67565b90506001600160a01b0381166105515783604051630b5d665f60e31b81526004016102e19190610e54565b61055a81610a50565b8060200190518101906103599190610e84565b61057561062e565b600180546001600160a01b0383166001600160a01b031990911681179091556105a66000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146102755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102e1565b600180546001600160a01b03191690556102f3816105de565b6040805180820190915260008152606060208201526000835167ffffffffffffffff8111156106d2576106d2610a91565b60405190808252806020026020018201604052801561071757816020015b60408051808201909152600080825260208201528152602001906001900390816106f05790505b5090506000805b85518110156108e7577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331654b0987838151811061076857610768610f81565b60200260200101516040518263ffffffff1660e01b815260040161078e91815260200190565b602060405180830381865afa1580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf9190610f97565b6107d99083610fc6565b915060405180604001604052808783815181106107f8576107f8610f81565b602002602001015181526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634641dce689858151811061084657610846610f81565b60200260200101516040518263ffffffff1660e01b815260040161086c91815260200190565b602060405180830381865afa158015610889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad9190610e67565b6001600160a01b03168152508382815181106108cb576108cb610f81565b6020026020010181905250806108e090610fde565b905061071e565b50806000036109095760405163067b6a0f60e01b815260040160405180910390fd5b604051806040016040528082815260200183815250925060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663093e9839856040516020016109629190610c6c565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161098d9190610e54565b60408051808303816000875af11580156109ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cf9190610ff7565b509050806002886040516109e39190610e0c565b9081526020016040518091039020819055508087604051610a049190610e0c565b604051908190038120865190917f1775727f73eb9deb31b3acc059551958c7fc9ddac6f63fec63eb7b198ccf257991610a3e918a90611027565b60405180910390a35050509392505050565b6060813b80610a67576311052bb46000526004601cfd5b600181039050604051915061ffe0603f820116820160405280825280600160208401853c50919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610aca57610aca610a91565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610af957610af9610a91565b604052919050565b600067ffffffffffffffff831115610b1b57610b1b610a91565b610b2e601f8401601f1916602001610ad0565b9050828152838383011115610b4257600080fd5b828260208301376000602084830101529392505050565b600082601f830112610b6a57600080fd5b61025c83833560208501610b01565b600067ffffffffffffffff821115610b9357610b93610a91565b5060051b60200190565b600082601f830112610bae57600080fd5b81356020610bc3610bbe83610b79565b610ad0565b82815260059290921b84018101918181019086841115610be257600080fd5b8286015b84811015610bfd5780358352918301918301610be6565b509695505050505050565b60008060408385031215610c1b57600080fd5b823567ffffffffffffffff80821115610c3357600080fd5b610c3f86838701610b59565b93506020850135915080821115610c5557600080fd5b50610c6285828601610b9d565b9150509250929050565b602080825282518282015282810151604080840181905281516060850181905260009392830191849160808701905b80841015610ccd578451805183528601516001600160a01b031686830152938501936001939093019290820190610c9b565b50979650505050505050565b600080600060608486031215610cee57600080fd5b833567ffffffffffffffff80821115610d0657600080fd5b610d1287838801610b59565b94506020860135915080821115610d2857600080fd5b610d3487838801610b9d565b93506040860135915080821115610d4a57600080fd5b508401601f81018613610d5c57600080fd5b610d6b86823560208401610b01565b9150509250925092565b600060208284031215610d8757600080fd5b813567ffffffffffffffff811115610d9e57600080fd5b61035984828501610b59565b6001600160a01b03811681146102f357600080fd5b600060208284031215610dd157600080fd5b813561025c81610daa565b60005b83811015610df7578181015183820152602001610ddf565b83811115610e06576000848401525b50505050565b60008251610e1e818460208701610ddc565b9190910192915050565b60008151808452610e40816020860160208601610ddc565b601f01601f19169290920160200192915050565b60208152600061025c6020830184610e28565b600060208284031215610e7957600080fd5b815161025c81610daa565b60006020808385031215610e9757600080fd5b825167ffffffffffffffff80821115610eaf57600080fd5b81850191506040808388031215610ec557600080fd5b610ecd610aa7565b835181528484015183811115610ee257600080fd5b80850194505087601f850112610ef757600080fd5b83519250610f07610bbe84610b79565b83815260069390931b84018501928581019089851115610f2657600080fd5b948601945b84861015610f6f5783868b031215610f435760008081fd5b610f4b610aa7565b8651815287870151610f5c81610daa565b8189015282529483019490860190610f2b565b95820195909552979650505050505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610fa957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fd957610fd9610fb0565b500190565b600060018201610ff057610ff0610fb0565b5060010190565b6000806040838503121561100a57600080fd5b82519150602083015161101c81610daa565b809150509250929050565b8281526040602082015260006103596040830184610e2856fea164736f6c634300080d000a";

type FileStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FileStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FileStore__factory extends ContractFactory {
  constructor(...args: FileStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contentStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FileStore> {
    return super.deploy(_contentStore, overrides || {}) as Promise<FileStore>;
  }
  override getDeployTransaction(
    _contentStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_contentStore, overrides || {});
  }
  override attach(address: string): FileStore {
    return super.attach(address) as FileStore;
  }
  override connect(signer: Signer): FileStore__factory {
    return super.connect(signer) as FileStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FileStoreInterface {
    return new utils.Interface(_abi) as FileStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FileStore {
    return new Contract(address, _abi, signerOrProvider) as FileStore;
  }
}
