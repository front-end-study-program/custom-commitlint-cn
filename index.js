module.exports = {
	parserPreset: 'conventional-changelog-conventionalcommits', // 用于解析提交消息的解析器预设
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
        'merge',
        'sync',
        'impr'
			],
		],
	},
	prompt: {
		questions: {
			type: {
				description: "选择要提交的更改类型",
				enum: {
					feat: {
						description: '新增功能，迭代项目需求',
						title: '功能',
						emoji: '✨',
					},
					fix: {
						description: '修复缺陷，修复上一版本存在问题',
						title: '修复',
						emoji: '🐛',
					},
					docs: {
						description: '更新文档，仅修改文档不修改代码',
						title: '文档',
						emoji: '📚',
					},
					style: {
						description: '变动格式，不影响代码逻辑',
						title: '样式',
						emoji: '💎',
					},
					refactor: {
						description: '重构代码，非新增功能也非修复缺陷',
						title: '重构',
						emoji: '📦',
					},
					perf: {
						description: '优化性能，提高代码执行性能',
						title: '性能',
						emoji: '🚀',
					},
					test: {
						description: '新增测试，追加测试用例验证代码',
						title: '测试',
						emoji: '🚨',
					},
					build: {
						description: '更新构建，改动构建工具或外部依赖',
						title: '构建',
						emoji: '🛠',
					},
					ci: {
						description: '更新脚本，改动 CI 或执行脚本配置',
						title: '脚本',
						emoji: '⚙️',
					},
					chore: {
						description: "变动事务，改动其他不影响代码的事务",
						title: '事务',
						emoji: '♻️',
					},
					revert: {
						description: '回滚版本，撤销某次代码提交',
						title: '回滚',
						emoji: '🗑',
					},
          merge: {
            description: '合并分支，合并分支代码到其他分支',
            title: '合并',
          },
          sync: {
            description: '同步分支，同步分支代码到其他分支',
            title: '同步',
          },
          impr: {
            description: '改进功能，升级当前功能模块',
            title: '改进',
          },
				},
			},
			scope: {
				description: '更改的范围是什么（例如: 组件或文件名）',
			},
			subject: {
				description: '写一个简短的描述',
			},
			body: {
				description: '提供更详细的变更说明',
			},
			isBreaking: {
				description: '有什么突破性的变化吗？',
			},
			breakingBody: {
				description: '中断更改提交需要一个主体。请输入提交本身的更长描述',
			},
			breaking: {
				description: '描述突破性的变化',
			},
			isIssueAffected: {
				description: '此更改是否影响任何未决问题？',
			},
			issuesBody: {
				description: '如果问题已解决，提交需要一个主体。请输入提交本身的更长描述',
			},
			issues: {
				description: '添加问题引用 (例如: "fix #123", "re #123".)',
			},
		},
	},
};
